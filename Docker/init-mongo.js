db.createUser({
  user: 'nestuser',
  pwd: 'nestuser',
  roles: [
    {
      role: 'resdWrite',
      db: 'nestdb',
    },
  ],
});
