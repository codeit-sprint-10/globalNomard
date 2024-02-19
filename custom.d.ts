declare module '*.svg' {
  import React from 'react';
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare module '*.woff2' {
  const content: string;
  export default content;
}

declare module '*.ttf' {
  const content: string;
  export default content;
}
