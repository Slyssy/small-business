const state = {
  user: {
    username: 'slyssy',
    email: 'slyssy@example.com',
  },
  listings: [
    {
      id: 1,
      business_name: 'Muck & Fuss',
      hours: '11am - 9am',
      description: `From comfort foods like crunchy onion rings and juicy burgers to lighter options like fresh salads, Muck & Fuss has something delicious for everyone. We pride ourselves on using the freshest ingredients for our creative chef-inspired menu. We’re dedicated to providing an unforgettable dining experience in downtown New Braunfels, from the food to the service!`,
      address: `295 East San Antonio, Suite #101, New Braunfels, TX 78130`,
    },
    {
      id: 2,
      business_name: 'Home Slice Pizza',
      hours: '11am - 11pm',
      description: `Home Slice Pizza is an independent neighborhood pizza joint serving authentic, NY-style pizza-by the pie or byt the slice-to nice people like you. We offer our homemade, hand tossed, bona fide pies for either dine in or carry out.`,
      address: '1415 South Congress Ave., Austin, TX 78704',
    },
  ],
  map: [],
};

export default state;
