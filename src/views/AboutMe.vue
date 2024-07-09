<template>
  <div>
    <v-parallax
      height="600"
      src="https://i.pinimg.com/originals/42/4a/df/424adf265a460f4c77230a28c3ef5efd.jpg"
    >
      <v-card class="mx-auto" color="#000000" dark width="600">
        <v-card-title>
          <div class="text-AboutMe">
            <h6>About Me</h6>
          </div>
        </v-card-title>

        <v-card-text class="text-description">
          <div class="text-education">
            <p>
              Education: Bachelor of Computer Engineering,<br />
              Prince of Songkla University
            </p>

            <p>Hobbies: Listening to music, Singing, Drawing</p>
            <p>Likes: Delicious food</p>
            <p>Dislikes: Snakes and garlic</p>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar>
              <v-img src="../assets/crop.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Titch Sirintra Phumnum</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1"> mdi-heart </v-icon>
              <span class="subheading mr-2">20.8K</span>
              <span class="mr-1">·</span>
              <v-icon class="mr-1"> mdi-share-variant </v-icon>
              <span class="subheading">14K</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-parallax>

    <!-- footer -->
    <div>
      <v-footer dark padless>
        <v-card tile class="white--text text-center">
          <v-card-text> </v-card-text>

          <v-card-text class="white--text pt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dolore molestiae dolorem magnam iusto quis ipsam vero sequi laborum
            consectetur autem nulla odit, exercitationem sit quae! At voluptatem
            quia asperiores sed sunt atque, itaque ad odio facere adipisci
            dolorem soluta suscipit! Unde deserunt et, blanditiis atque
            exercitationem placeat libero voluptatem nulla, in, consequatur
            quisquam quo impedit laboriosam soluta doloremque? Unde.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            <strong>@Copyright</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text-education {
  color: white;
  font-weight: 500;
}

.text-AboutMe {
  font-size: 30px;
  color: white;
  font-weight: bold;
}

.text-description {
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
