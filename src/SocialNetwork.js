import React, { useState, useEffect } from "react";
import { get } from "./mockBackend/fetch";

export default function SocialNetwork() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([get("/menu"), get("/news-feed"), get("/friends")]).then(
      ([menuResponse, newsFeedResponse, friendsResponse]) => {
        setData({
          menu: menuResponse.data,
          newsFeed: newsFeedResponse.data,
          friends: friendsResponse.data,
        });
      }
    );
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>My Network</h1>
      <nav>
        {data.menu.map((menuItem) => (
          <button key={menuItem}>{menuItem}</button>
        ))}
      </nav>
      <div className="content">
        <section>
          {data.newsFeed.map(({ id, title, message, imgSrc }) => (
            <article key={id}>
              <h3>{title}</h3>
              <p>{message}</p>
              <img src={imgSrc} alt="News" />
            </article>
          ))}
        </section>
        <aside>
          <ul>
            {data.friends
              .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
              .map(({ id, name, isOnline }) => (
                <li key={id} className={isOnline ? "online" : "offline"}>
                  {name}
                </li>
              ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
