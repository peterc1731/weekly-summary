import fetch from 'isomorphic-unfetch';

export const login = async (username, password) => {
  const res = await fetch('https://personal-cms-1.appspot.com/api/admin/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export const signup = async (username, password) => {
  const res = await fetch('https://personal-cms-1.appspot.com/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!res.ok) {
    throw res;
  }

  return res.json();
};

export const setCookie = (token) => {
  const d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  document.cookie = `write-md-token=${token};expires=${d.toUTCString()};`;
};
