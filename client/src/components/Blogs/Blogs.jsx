import React from "react";
// import "./blogs.css";
function Blogs() {
  return (
    <>
      <div class="wrapper">
        <div class="card">
          <div class="card-banner">
            <p class="category-tag popular">Pizza</p>
            <img
              class="banner-img"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xna5h3bfbgmyrb6py1o7.jpg"
              alt=""
            />
          </div>
          <div class="card-body">
            <p class="blog-hashtag">#Food #Pizza</p>
            <h2 class="blog-title">What is the tastiest pizza in Pizza Hut?</h2>
            <p class="blog-description">
              My thoughts on the future of front end web development
            </p>

            <div class="card-profile">
              <img
                class="profile-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYJQKSoM7S75P_KMRtQHqAAIPh133CSxByw&usqp=CAU"
                alt=""
              />
              <div class="card-profile-info">
                <h3 class="profile-name">Eleanor Pea</h3>
                <p class="profile-followers">5.2k followers</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-banner">
            <p class="category-tag technology">Biryani</p>
            <img
              class="banner-img"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lr627qqql65d9hvr5nsq.jpg"
              alt=""
            />
          </div>
          <div class="card-body">
            <p class="blog-hashtag">#Biryani #Food</p>
            <h2 class="blog-title">
              Which city is famous for biryani in India?
            </h2>
            <p class="blog-description">
              Looking to upgrade your gear? Here is the list of the best
              photography tools for this year
            </p>

            <div class="card-profile">
              <img
                class="profile-img"
                src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                alt=""
              />
              <div class="card-profile-info">
                <h3 class="profile-name">Darrell Steward</h3>
                <p class="profile-followers">15.7k followers</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-banner">
            <p class="category-tag psychology">Burger</p>
            <img
              class="banner-img"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nfz3z2osldbm8ymanmoq.jpg"
              alt=""
            />
          </div>
          <div class="card-body">
            <p class="blog-hashtag">#Burger #Food</p>
            <h2 class="blog-title">What is the most popular burger?</h2>
            <p class="blog-description">
              Mediation has transformed my life. These are the best practices to
              get into the habit
            </p>

            <div class="card-profile">
              <img
                class="profile-img"
                src="https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg"
                alt=""
              />
              <div class="card-profile-info">
                <h3 class="profile-name">Savannah Nguyen</h3>
                <p class="profile-followers">18K followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
