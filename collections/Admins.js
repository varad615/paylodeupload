const Admins = {
  slug: "admins",
  admin: {
    useAsTitle: "name"
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: "name",
      type: "text"
    }
  ],
  timestamps: false
};

export default Admins;
