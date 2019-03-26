import fetch from 'isomorphic-unfetch';

export const getArticles = async (token) => {
  const res = await fetch('https://personal-cms-1.appspot.com/api/admin/articles', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export const getArticle = async (id, token) => {
  const res = await fetch(`https://personal-cms-1.appspot.com/api/admin/articles/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export const createArticle = async (data, token) => {
  const article = data;
  article.md = `# ${data.meta.title}\nSwitch to edit mode to start writing...`;
  const res = await fetch('https://personal-cms-1.appspot.com/api/admin/articles', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export const updateArticle = async (md, id, token) => {
  const res = await fetch(`https://personal-cms-1.appspot.com/api/admin/articles/${id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ md }),
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export const deleteArticle = async (id, token) => {
  const res = await fetch(`https://personal-cms-1.appspot.com/api/admin/articles/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};
