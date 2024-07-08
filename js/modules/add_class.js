export const add_class_path_svg = () => {
  const paths = document.querySelectorAll("svg path");
  paths.forEach((path, key) => {
    path.classList.add(`svg-elem-${key+1}`);
  });
};
