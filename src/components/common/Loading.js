import { Flag, People, Map as Mp } from 'react-bootstrap-icons';
import React from 'react';
import Map from '../common/Map';

export const Loading = () => {
  return (
    <div>
      <main>
        <div className="wrapper">
          <main className="page-main">
            <div className="title-content">
              <div className="banner-title">
                FIND
                <br />
                EXCESSIVE FORCE
                <br />
                INCIDENTS
              </div>
              <div className="banner-second-title">NEAR YOU</div>
              <div className="banner-subtitle">
                Explore the map from a human rights perspective
              </div>
              <a
                href="https://c.humanrightsfirst.dev/#map"
                class="hvr-icon-hang view-map"
              >
                <span className="view-map-font">
                  View map <i class="fa fa-chevron-down hvr-icon"></i>
                </span>
              </a>
            </div>
            <a href="#map" className="next-page">
              <i class="fa fa-chevron-down -page-btn"></i>
            </a>
          </main>
        </div>
        <div id="map">
          <Map />
        </div>
        <div className="last-section">
          <section className="intro" id="about">
            <h2>What is Human Rights Considered?</h2>
            <div className="icons">
              <div>
                <Flag />
              </div>
              <div>
                <People />
              </div>
              <div>
                <Mp />
              </div>
            </div>
            <p className="considered">
              Human Rights Considered is a public police brutality incident
              viewing application.
              <br />
              <br /> Our goal is to provide information regarding a variety of
              police brutality incidents in an accurate and timely manner to
              public. The incidents have been categorized and can be filtered by
              types of force, location, and date.
            </p>
          </section>
          <section className="middle">
            <div className="middle-content">
              <h1 className="mid-title">How it works?</h1>
              <p className="mid-text">
                We collect relevant incidents data from Twitter, Reddit, and
                police agencies to display it on the map.
              </p>
            </div>
          </section>
          <section className="bottom-section">
            <h2>About Human Rights First</h2>
            <div className="bottom">
              <img
                src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/423165_10150686770200747_669805325_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=-TaZmzOKohgAX8W3jk4&_nc_ht=scontent-sjc3-1.xx&oh=88b11d2fdc32243402fed9c37667b936&oe=5F8F34C8"
                alt="humane-right-first-logo"
              />
              <p className="organization">
                Human Rights First is an independent advocacy and action
                organization that challenges America to live up to its ideals.
                We believe American leadership is essential in the global
                struggle for human rights, so we press the U.S. government and
                private companies to respect human rights and the rule of law.
                When they fail, we step in to demand reform, accountability and
                justice. Around the world, we work where we can best harness
                American influence to secure core freedoms.
              </p>
            </div>
            <a href="#" className="back-to-top">
              back to top {'  '}
              <i class="fa fa-chevron-up"></i>
            </a>
          </section>
        </div>
      </main>
      <footer className="page-footer">
        <small>© Copyright 2020. All rights reserved.</small>
        <ul></ul>
      </footer>
    </div>
  );
};
