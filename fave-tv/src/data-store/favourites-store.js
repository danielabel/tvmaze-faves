
function save (id) {
  localStorage.setItem(`favourite.tv.${id}`, 'yes');
}

function unsave (id) {
  localStorage.removeItem(`favourite.tv.${id}`);
}

function has (id) {
  return !!localStorage.getItem(`favourite.tv.${id}`);
}

export {
  has,
  save,
  unsave,
};
