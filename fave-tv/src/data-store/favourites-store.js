
function save (id) {
  localStorage.setItem(`favourite.tv.${id}`, 'yes');
}

function has (id) {
  return !!localStorage.getItem(`favourite.tv.${id}`);
}

export {
  has,
  save,
};
