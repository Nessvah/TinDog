class User {
  constructor(data) {
    Object.assign(this, data);
  }

  receiveScore(score) {
    if (score === "like") {
      return `<img class="badge"
            src="/assets/img/like-image.png" alt="" />`;
    } else if (score === "nope") {
      return `<img class="badge"
            src="/assets/img/nope-image.png" alt="" />`;
    } else {
      console.log("Erro com os badges");
    }
  }

  getUserHtml() {
    // destructuring user data
    const { name, picture, status, age } = this;

    return `<img class="user--photo"
          src="${picture}"
          alt="User profile photo"
        />
        <h2 class="user--info">${name}, ${age}</h2>
        <p class="user--status">${status}</p>`;
  }
}

export default User;
