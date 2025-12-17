import React from 'react';
import { Content, Header, Page } from '@backstage/core-components';

export const TechRadar = () => (
  <Page themeId="tool">
    {/* Backstage-style header */}
    <Header title="Tech Radar" subtitle="Pick the recommended technologies for your projects" />

    <Content>
      <iframe
        src="custom/techradar/index.html" //src="https://dev1.onepraxis.cgm.ag/tech-radar/"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </Content>
  </Page>
);
