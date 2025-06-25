const Testimonials = () => {
    const users = [
      {
        name: "Tamanna Akter",
        img: "https://i.pravatar.cc/100?img=1",
        rating: 5,
        message: "This app is super helpful and easy to use. Highly recommended for everyone!",
      },
      {
        name: "Lima Khatun",
        img: "https://i.pravatar.cc/100?img=2",
        rating: 4,
        message: "Nice UI and smooth performance. Waiting for new features!",
      },
      {
        name: "Rahim Uddin",
        img: "https://i.pravatar.cc/100?img=3",
        rating: 5,
        message: "I love how user-friendly this app is. It made my life easier!",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12 px-4 md:px-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Users Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h4>
                  <p className="text-yellow-400">
                    {"★".repeat(user.rating) + "☆".repeat(5 - user.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">{user.message}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  