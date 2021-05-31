import React from 'react';
import '../../scss/element/loader.scss';

export default function Loader() {
  return (
    <section className="loader-center">
      <div className="loader loader-1">
        <div className="loader-outter"></div>
        <div className="loader-inner"></div>
      </div>
    </section>
  );
}
