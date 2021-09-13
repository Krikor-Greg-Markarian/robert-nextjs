// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const object = {
    data: [
      {
        button: "Travel",
        date: "07 JUNE 2016",
        title: "How to ask for a haircut you want when you're abroad",
        subtitle:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem impedit libero maiores, itaque atque in sunt eaque consequatur nesciunt dolores hic, ratione excepturi reprehenderit tempora. Saepe nobis debitis incidunt? Maiores!",
        author: "Post by Author",

        text: "Best Beaches in Sydney For The Easter Long Weekedn",
        fashion: "FASHION",
        text2: "Your New Favorite Accessory Might Be From Ukrain",
        fashion2: "LIFESTYLE",
        text3: "London Coolest Cofeeshop Now Are in Downtown",
        fashion3: "TRAVEL",
        text4: "London Coolest Cofeeshop Now Are in Downtown",
        fashion4: "TRAVEL",
        hikingimage3:
          "https://cdn.pixabay.com/photo/2016/01/19/17/31/walking-1149747__340.jpg",
        hikingimage4:
          "https://cdn.pixabay.com/photo/2016/01/19/17/47/hiker-1149898__340.jpg",
        hikingimage5:
          "https://cdn.pixabay.com/photo/2015/04/20/17/39/man-731900__340.jpg",
        hikingimage6:
          "https://cdn.pixabay.com/photo/2015/09/02/12/51/girl-918706__340.jpg",
      },
      {
        date: "07 JUNE 2016",
        title: "How to ask for a haircut you want when you're abroad",
        subtitle:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem impedit libero maiores, itaque atque in sunt eaque consequatur nesciunt dolores hic, ratione excepturi reprehenderit tempora. Saepe nobis debitis incidunt? Maiores!",
        author: "Post by Author",
        button2: "TRAVEL",

        text: "Best Beaches in Sydney For The Easter Long Weekedn",
        fashion: "FASHION",
        text2: "Your New Favorite Accessory Might Be From Ukrain",
        fashion2: "LIFESTYLE",
        text3: "London Coolest Cofeeshop Now Are in Downtown",
        fashion3: "TRAVEL",
        text4: "London Coolest Cofeeshop Now Are in Downtown",
        fashion4: "TRAVEL",
        hikingimage3:
          "https://cdn.pixabay.com/photo/2016/01/19/17/31/walking-1149747__340.jpg",
        hikingimage4:
          "https://cdn.pixabay.com/photo/2016/01/19/17/47/hiker-1149898__340.jpg",
        hikingimage5:
          "https://cdn.pixabay.com/photo/2015/04/20/17/39/man-731900__340.jpg",
        hikingimage6:
          "https://cdn.pixabay.com/photo/2015/09/02/12/51/girl-918706__340.jpg",
      },
      {
        date: "07 JUNE 2016",
        title: "How to ask for a haircut you want when you're abroad",
        subtitle:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem impedit libero maiores, itaque atque in sunt eaque consequatur nesciunt dolores hic, ratione excepturi reprehenderit tempora. Saepe nobis debitis incidunt? Maiores!",
        author: "Post by Author",

        button3: "BUSINESS",
        text: "Best Beaches in Sydney For The Easter Long Weekedn",
        fashion: "FASHION",
        text2: "Your New Favorite Accessory Might Be From Ukrain",
        fashion2: "LIFESTYLE",
        text3: "London Coolest Cofeeshop Now Are in Downtown",
        fashion3: "TRAVEL",
        text4: "London Coolest Cofeeshop Now Are in Downtown",
        fashion4: "TRAVEL",
        hikingimage3:
          "https://cdn.pixabay.com/photo/2016/01/19/17/31/walking-1149747__340.jpg",
        hikingimage4:
          "https://cdn.pixabay.com/photo/2016/01/19/17/47/hiker-1149898__340.jpg",
        hikingimage5:
          "https://cdn.pixabay.com/photo/2015/04/20/17/39/man-731900__340.jpg",
        hikingimage6:
          "https://cdn.pixabay.com/photo/2015/09/02/12/51/girl-918706__340.jpg",
      },
      {
        date: "07 JUNE 2016",
        title: "How to ask for a haircut you want when you're abroad",
        subtitle:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem impedit libero maiores, itaque atque in sunt eaque consequatur nesciunt dolores hic, ratione excepturi reprehenderit tempora. Saepe nobis debitis incidunt? Maiores!",
        author: "Post by Author",
        button4: "TECHNOLOGY",
        text: "Best Beaches in Sydney For The Easter Long Weekedn",
        fashion: "FASHION",
        text2: "Your New Favorite Accessory Might Be From Ukrain",
        fashion2: "LIFESTYLE",
        text3: "London Coolest Cofeeshop Now Are in Downtown",
        fashion3: "TRAVEL",
        text4: "London Coolest Cofeeshop Now Are in Downtown",
        fashion4: "TRAVEL",
        hikingimage3:
          "https://cdn.pixabay.com/photo/2016/01/19/17/31/walking-1149747__340.jpg",
        hikingimage4:
          "https://cdn.pixabay.com/photo/2016/01/19/17/47/hiker-1149898__340.jpg",
        hikingimage5:
          "https://cdn.pixabay.com/photo/2015/04/20/17/39/man-731900__340.jpg",
        hikingimage6:
          "https://cdn.pixabay.com/photo/2015/09/02/12/51/girl-918706__340.jpg",
      },
    ],
  };

  res.status(200).json(object);
}
