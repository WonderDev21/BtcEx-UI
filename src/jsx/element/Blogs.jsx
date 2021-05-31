import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';

export default ({ posts = [] }) => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section-title text-center">
            <h2>{t('blog')}</h2>
          </div>
        </div>
      </div>
      <div className="row">
        {posts.map(post => (
          <div key={post.slug} className="col-xl-4 col-lg-4 col-md-12">
            <div className="blog-grid">
              <div className="card">
                <img className="img-blog" src={post.feature_image} alt="blog" />
                <div className="card-body">
                  <a rel="noopener noreferrer" target="_blank" href={post.url}>
                    <h4 className="card-title">{post.title}</h4>
                  </a>
                  <p className="card-text">
                    {post.excerpt}
                  </p>
                </div>
                <div className="card-footer">
                  <div className="meta-info">
                    <Link to={'#'} className="author">
                      <img src={post && (post.authors[0].profile_image || require('./../../images/avatar/5.jpg'))} alt="" />
                      {post && post.authors[0].name}
                    </Link>
                    <Link to={'#'} className="post-date"><i className="la la-calendar"></i>{dayjs(post.published_at).format('D MMM, YYYY')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}