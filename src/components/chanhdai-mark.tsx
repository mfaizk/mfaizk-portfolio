export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 300 256"
      {...props}
    >
      <rect x="0" y="64" width="32" height="128" />
      <rect x="32" y="64" width="32" height="32" />
      <rect x="64" y="96" width="32" height="32" />
      <rect x="96" y="64" width="32" height="32" />
      <rect x="128" y="64" width="32" height="128" />

      <rect x="176" y="64" width="32" height="128" />
      <rect x="208" y="64" width="64" height="32" />
      <rect x="208" y="112" width="48" height="32" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
