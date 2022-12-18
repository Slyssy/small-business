const state = {
  user: [],
  listings: [
    {
      open: false,
      id: 1,
      business_name: 'Muck & Fuss',
      hours: '11am - 9am',
      description: `From comfort foods like crunchy onion rings and juicy burgers to lighter options like fresh salads, Muck & Fuss has something delicious for everyone. We pride ourselves on using the freshest ingredients for our creative chef-inspired menu. We’re dedicated to providing an unforgettable dining experience in downtown New Braunfels, from the food to the service!`,
      address: `295 East San Antonio, Suite #101, New Braunfels, TX 78130`,
    },
    {
      open: false,
      id: 2,
      business_name: `Gruene's Last Call`,
      hours: 'Tuesday - Thursday 4pm - 10pm Friday - Saturday 3pm - 11pm',
      description: `Women Owned Cocktail Lounge. Spirits are meant to be enjoyed and fabulous times are meant to be had. Gruene’s Last Call is New Braunfels new favorite cocktail lounge. We focus on unique specialty cocktails featuring fresh ingredients. Come make friends at Gruene’s Last Call where we remind you of the beauty of extravagance.`,
      address: '2348 Gruene Lake Dr Suite A, New Braunfels, TX 78130',
    },
    {
      open: false,
      id: 3,
      business_name: 'Huisache Grill',
      hours: '11am - 9pm Tuesday - Sunday',
      description: `An intimate and casual restaurant serving creative contemporary cuisine with fresh regional ingredients.`,
      address: '303 West San Antonio Street, New Braunfels, TX 78130',
    },
    {
      open: false,
      id: 4,
      business_name: 'Goodwins Underground Speakeasy',
      hours: '7pm - 12am Monday - Saturday & Sunday 7pm - 10pm',
      description: `A delightful underground speakeasy. Come on by and enjoy some live tunes, stiff drinks, and good eats!`,
      address: '1263 Gruene Road, New Braunfels, TX 78130',
    },
    {
      open: false,
      id: 5,
      business_name: 'Home Slice Pizza',
      hours: '7pm - 12am Monday - Saturday & Sunday 7pm - 10pm',
      description: `For a fine dining experience, come to Alpine Haus Restaurant, in New Braunfels, nestled in the beautiful Texas Hill Country. We specialize in Bavarian style cooking with influences from Germany, Austria and Switzerland.`,
      address: '1415 S Congress Ave, Austin, TX 78704',
    },
  ],
  coordinates: [],
  dialogOpen: false,
};

export default state;
