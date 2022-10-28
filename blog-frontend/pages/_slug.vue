<template>
<div class="">
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#!">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Blog</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Page content-->
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-8">
        <!-- Post content-->
        <article v-if="post">
          <!-- Post header-->
          <header class="mb-4">
            <!-- Post title-->
            <h1 class="fw-bolder mb-1">{{post.title}}</h1>
            <!-- Post meta content-->
            <div class="text-muted fst-italic mb-2">Posted on {{post.publishedAt}} by {{post.author.username}}</div>
            <!-- Post categories-->
            <a class="badge bg-secondary text-decoration-none link-light" href="#!" v-for="category in post.categories" :key="category._key">{{category.title}}</a>
          </header>
          <!-- Preview image figure-->
          <figure class="mb-4"><img class="img-fluid rounded" :src="$urlFor(post.thumbnail)" alt="..." /></figure>
          <!-- Post content-->
<!--          <SanityContent :blocks="post.content" />-->
          <block-content :blocks="child" v-for="child in post.content" :key="child._id" />
        </article>
        <!-- Comments section-->
        <section class="mb-5">
          <div class="card bg-light">
            <div class="card-body">
              <!-- Comment form-->
              <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
              <!-- Comment with nested comments-->
              <div class="d-flex mb-4">
                <!-- Parent comment-->
                <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                <div class="ms-3">
                  <div class="fw-bold">Commenter Name</div>
                  If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                  <!-- Child comment 1-->
                  <div class="d-flex mt-4">
                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                    <div class="ms-3">
                      <div class="fw-bold">Commenter Name</div>
                      And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                    </div>
                  </div>
                  <!-- Child comment 2-->
                  <div class="d-flex mt-4">
                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                    <div class="ms-3">
                      <div class="fw-bold">Commenter Name</div>
                      When you put money directly to a problem, it makes a good headline.
                    </div>
                  </div>
                </div>
              </div>
              <!-- Single comment-->
              <div class="d-flex">
                <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                <div class="ms-3">
                  <div class="fw-bold">Commenter Name</div>
                  When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Side widgets-->
      <div class="col-lg-4">
        <!-- Search widget-->
        <div class="card mb-4">
          <div class="card-header">Search</div>
          <div class="card-body">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
              <button class="btn btn-primary" id="button-search" type="button">Go!</button>
            </div>
          </div>
        </div>
        <!-- Categories widget-->
        <div class="card mb-4">
          <div class="card-header">Categories</div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                  <li><a href="#!">Web Design</a></li>
                  <li><a href="#!">HTML</a></li>
                  <li><a href="#!">Freebies</a></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                  <li><a href="#!">JavaScript</a></li>
                  <li><a href="#!">CSS</a></li>
                  <li><a href="#!">Tutorials</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Side widget-->
        <div class="card mb-4">
          <div class="card-header">Side Widget</div>
          <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer-->
  <footer class="py-5 bg-dark">
    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
  </footer>
</div>
</template>

<script>
import { groq } from '@nuxtjs/sanity';
//import { SanityContent } from "@nuxtjs/sanity/dist/components/sanity-content";
export default {
  name: "_slug",
  //components: { SanityContent },
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]`;
    const post = await $sanity.fetch(query);
    console.log(post)
    return { post };
  },
}
</script>

<style scoped>

</style>
