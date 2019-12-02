<template>
  <div>
    <!-- Banner图 -->
    <section class="banner d-flex align-items-center">
      <div class="overlay"></div>
      <div class="container">
        <div class="title row justify-content-center">
          <div class="text-center">
            <h1 class="text-white mb-30">有时间多看看这个世界，而不是宅着。</h1>
            <p class="text-white mt-30">
              做人总是有感觉无聊和空虚的时候，那么这个时候我们为什么找一些事情来充实自己呢？
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog类型 -->
    <section class="category pt-20 pb-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="mb-20">类型</h2>
          </div>
          <div class="col-lg-4 pb-10">
            <div class="single-cat-widget">
              <div class="relative">
                <div class="overlay overlay-bg"></div>
                <a href="#">
                  <div class="thumb">
                    <img class="w-100" src="/img/blog/cat-widget1.jpg" alt />
                  </div>
                  <div
                    class="content-details d-flex flex-column justify-content-center alig-items-center text-center"
                  >
                    <h4 class="text-white mb-10">旅行日子</h4>
                    <span class="border-1px ml-10 mr-10"></span>
                    <p class="text-white mt-10">
                      每一段旅程，都是值得纪念和回忆的！
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 pb-10">
            <div class="single-cat-widget">
              <div class="relative">
                <div class="overlay overlay-bg"></div>
                <a href="#">
                  <div class="thumb">
                    <img class="w-100" src="/img/blog/cat-widget1.jpg" alt />
                  </div>
                  <div
                    class="content-details d-flex flex-column justify-content-center alig-items-center text-center"
                  >
                    <h4 class="text-white mb-10">旅行日子</h4>
                    <span class="border-1px ml-10 mr-10"></span>
                    <p class="text-white mt-10">
                      每一段旅程，都是值得纪念和回忆的！
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 pb-10">
            <div class="single-cat-widget">
              <div class="relative">
                <div class="overlay overlay-bg"></div>
                <a href="#">
                  <div class="thumb">
                    <img class="w-100" src="/img/blog/cat-widget1.jpg" alt />
                  </div>
                  <div
                    class="content-details d-flex flex-column justify-content-center alig-items-center text-center"
                  >
                    <h4 class="text-white mb-10">旅行日子</h4>
                    <span class="border-1px ml-10 mr-10"></span>
                    <p class="text-white mt-10">
                      每一段旅程，都是值得纪念和回忆的！
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog最新内容 -->
    <section class="post-content-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 posts-list">
            <div class="single-post row mb-40">
              <div class="col-lg-3 col-md-3 meta-details mt-30">
                <ul class="tags mb-30">
                  <li>
                    <a href="#">旅行,</a>
                  </li>
                  <li>
                    <a href="#">旅行,</a>
                  </li>
                  <li>
                    <a href="#">旅行</a>
                  </li>
                </ul>
                <div class="user-details row">
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="user" class="icon" />
                    <a href="#" class="mr-10">钟大贵</a>
                  </p>
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="calendar-day" class="icon" />
                    <a href="#" class="mr-10">2018年12月17日</a>
                  </p>
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="eye" class="icon" />
                    <a href="#" class="mr-10">1.2万次被观看</a>
                  </p>
                  <p class="user-name col-lg-12 col-md-12 col-6 mb-10">
                    <font-awesome-icon icon="comment" class="icon" />
                    <a href="#" class="mr-10">2万评论</a>
                  </p>
                </div>
              </div>
              <div class="col-lg-9 col-md-9">
                <div class="feature-img">
                  <img class="w-100" src="/img/blog/feature-img1.jpg" alt />
                </div>
                <div class="posts-title">
                  <h3 class="font-weight-bold mt-20 mb-20">旅行，是一种乐趣</h3>
                </div>
                <div class="excert">
                  人生本来就很短暂，如果不能好好地为自己活一把，那么或者又有什么意义呢？
                </div>
                <a href="#" class="primary-btn mt-20">查看详情</a>
              </div>
            </div>
            <div
              class="blog-pagination d-flex justify-content-center pt-60 pb-120"
            >
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                class="mt-4"
                first-text=""
                last-text=""
                aria-label
              >
                <!-- <template v-slot:first-text
                  ><span class="text-success">First</span></template
                > -->
                <template v-slot:prev-text
                  ><font-awesome-icon icon="chevron-left" class="icon"
                /></template>
                <template v-slot:next-text
                  ><font-awesome-icon icon="chevron-right" class="icon"
                /></template>
                <!-- <template v-slot:last-text
                  ><span class="text-info">Last</span></template
                > -->
                <!-- <template v-slot:page="{ page, active }">
                  <b v-if="active">{{ page }}</b>
                  <i v-else>{{ page }}</i>
                </template> -->
              </b-pagination>
            </div>
          </div>
          <div class="col-lg-4 sidebar-widgets mb-30">
            <div class="widget-wrap">
              <div class="single-siderbar-widget search-widget">
                <form action class="search-form clear">
                  <input type="text" placeholder="查找文章" />
                  <button type="submit">
                    <font-awesome-icon icon="search" class="icon" />
                  </button>
                </form>
              </div>
              <div class="single-siderbar-widget user-info-widget text-center">
                <div class="avatar">
                  <img src="/img/blog/user-info.png" alt />
                </div>
                <a href="#">
                  <h4 class="mt-40">大大大贵</h4>
                </a>
                <p>一直在进步的菜鸟前端。</p>
                <ul class="social-links">
                  <li>
                    <a href="#">
                      <svg
                        t="1564270973400"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1115"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M758.88 43.424C743.424 41.152 690.304 36.576 628.576 36.576 499.424 36.576 410.88 115.424 410.88 260L410.88 384.576 265.152 384.576 265.152 553.728 410.88 553.728 410.88 987.424 585.728 987.424 585.728 553.728 730.88 553.728 753.152 384.576 585.728 384.576 585.728 276.576C585.728 228 598.88 194.304 669.152 194.304L758.88 194.304 758.88 43.424Z"
                          p-id="1116"
                          fill="#777777"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        t="1564271179238"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="1543"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M919.759462 318.994613c0-9.605475-0.184234-19.102577-0.608696-28.534655 41.060787-30.595551 76.68666-68.894629 104.863684-112.720738a403.247526 403.247526 0 0 1-120.68436 33.017692c43.401647-26.708567 76.68666-69.423851 92.415219-120.68436-40.638132 24.645865-85.589515 42.265535-133.383889 51.446549-38.295465-43.575045-92.944441-71.329413-153.358869-72.360764-116.027926-1.918205-210.084998 96.132418-210.084999 218.973404 0 17.460724 1.826088 34.394031 5.451171 50.745736-174.722834-11.243716-329.55016-102.190479-433.116978-239.293373-18.071226 32.847907-28.438925 71.237296-28.438925 112.377556 0 77.811934 37.090717 146.970271 93.44657 187.779994-34.500598-1.560574-66.819283-12.009553-95.166091-29.141545v2.85744c0 108.752474 72.440238 199.870827 168.560013 221.13003-17.621477 5.012259-36.207475 7.62044-55.322696 7.526516a191.542349 191.542349 0 0 1-39.500214-4.325895c26.708567 89.120675 104.332655 154.231274 196.231295 156.400543-71.923659 59.635948-162.525433 95.258208-260.892145 95.00895-16.960401 0-33.720311-1.137918-50.15149-3.200621 93.011271 63.80109 203.418242 100.960443 322.104923 100.960443 386.350343 0.092117 597.636477-336.191629 597.636477-627.962902z"
                          fill="#777777"
                          p-id="1544"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        t="1564271333431"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2374"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M347.8 794.8c0 4-4.6 7.2-10.4 7.2-6.6 0.6-11.2-2.6-11.2-7.2 0-4 4.6-7.2 10.4-7.2 6-0.6 11.2 2.6 11.2 7.2z m-62.2-9c-1.4 4 2.6 8.6 8.6 9.8 5.2 2 11.2 0 12.4-4s-2.6-8.6-8.6-10.4c-5.2-1.4-11 0.6-12.4 4.6z m88.4-3.4c-5.8 1.4-9.8 5.2-9.2 9.8 0.6 4 5.8 6.6 11.8 5.2 5.8-1.4 9.8-5.2 9.2-9.2-0.6-3.8-6-6.4-11.8-5.8zM505.6 16C228.2 16 16 226.6 16 504c0 221.8 139.6 411.6 339 478.4 25.6 4.6 34.6-11.2 34.6-24.2 0-12.4-0.6-80.8-0.6-122.8 0 0-140 30-169.4-59.6 0 0-22.8-58.2-55.6-73.2 0 0-45.8-31.4 3.2-30.8 0 0 49.8 4 77.2 51.6 43.8 77.2 117.2 55 145.8 41.8 4.6-32 17.6-54.2 32-67.4-111.8-12.4-224.6-28.6-224.6-221 0-55 15.2-82.6 47.2-117.8-5.2-13-22.2-66.6 5.2-135.8 41.8-13 138 54 138 54 40-11.2 83-17 125.6-17s85.6 5.8 125.6 17c0 0 96.2-67.2 138-54 27.4 69.4 10.4 122.8 5.2 135.8 32 35.4 51.6 63 51.6 117.8 0 193-117.8 208.4-229.6 221 18.4 15.8 34 45.8 34 92.8 0 67.4-0.6 150.8-0.6 167.2 0 13 9.2 28.8 34.6 24.2C872.4 915.6 1008 725.8 1008 504 1008 226.6 783 16 505.6 16zM210.4 705.8c-2.6 2-2 6.6 1.4 10.4 3.2 3.2 7.8 4.6 10.4 2 2.6-2 2-6.6-1.4-10.4-3.2-3.2-7.8-4.6-10.4-2z m-21.6-16.2c-1.4 2.6 0.6 5.8 4.6 7.8 3.2 2 7.2 1.4 8.6-1.4 1.4-2.6-0.6-5.8-4.6-7.8-4-1.2-7.2-0.6-8.6 1.4z m64.8 71.2c-3.2 2.6-2 8.6 2.6 12.4 4.6 4.6 10.4 5.2 13 2 2.6-2.6 1.4-8.6-2.6-12.4-4.4-4.6-10.4-5.2-13-2z m-22.8-29.4c-3.2 2-3.2 7.2 0 11.8 3.2 4.6 8.6 6.6 11.2 4.6 3.2-2.6 3.2-7.8 0-12.4-2.8-4.6-8-6.6-11.2-4z"
                          fill="#777777"
                          p-id="2375"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        t="1564271359512"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="3193"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M386.119523 732.0006c7.482415-12.238742 9.521864-25.157983 6.121418-38.759769-3.40147-13.598716-11.901051-23.12058-25.50079-28.559453-12.919241-5.439896-26.859741-5.439896-41.819454 0-14.959713 5.438872-26.180266 13.9405-33.660634 25.50079-8.840342 12.920264-11.56029 25.839505-8.160867 38.758746 3.400446 12.921287 11.56029 22.781866 24.480554 29.581736 12.919241 6.79987 27.200502 7.139607 42.839691 1.019213C366.060675 753.422492 377.961726 744.242412 386.119523 732.0006L386.119523 732.0006zM439.161576 663.661142c3.399423-4.758374 4.078899-9.859555 2.039449-15.300474-2.039449-5.438872-5.438872-8.838296-10.200316-10.19827-4.759397-2.039449-10.199293-2.039449-16.319687 0-6.118348 2.039449-10.199293 5.438872-12.239765 10.19827-6.118348 12.240789-3.399423 21.082154 8.16189 26.52205 5.437849 1.359974 10.879792 1.01819 16.319687-1.02126C432.361707 671.822009 436.441629 668.421562 439.161576 663.661142L439.161576 663.661142zM538.101983 724.863039c-16.999163 38.757722-46.921659 66.977437-89.760326 84.658122-42.839691 17.680684-85.340667 20.060895-127.501906 7.141654-40.800241-12.922311-68.681242-37.063127-83.640955-72.421426-14.959713-35.359322-13.9405-70.719668 3.060709-106.080014 18.359137-35.362392 47.260373-61.882396 86.699618-79.562057 39.441291-17.679661 79.221296-21.080108 119.342062-10.200316 42.158169 10.880815 72.41938 33.32192 90.779539 67.320245C555.441906 649.721665 555.782667 686.102247 538.101983 724.863039zM715.58421 633.06224c-3.399423-36.041868-20.060895-68.000743-49.983391-95.880721-29.918403-27.879977-69.698408-48.621371-119.338992-62.22111-49.63956-13.600763-101.660354-17.679661-156.061358-12.240789-84.319407 8.842389-154.360623 35.701107-210.120578 80.58127-55.760978 44.881187-80.921008 95.200222-75.480088 150.960177 3.399423 36.040844 20.399609 68.00279 51.000558 95.881744 30.598902 27.877931 70.040193 48.619324 118.320802 62.220087 48.279586 13.599739 100.30038 17.677615 156.060335 12.239765 84.999906-8.838296 155.040099-35.69906 210.120578-80.580247C695.184601 739.142254 720.342584 688.821171 715.58421 633.06224L715.58421 633.06224zM891.024941 636.122949c0 25.838482-6.800893 52.018747-20.402679 78.538751-13.600763 26.521027-34.339086 52.700269-62.220087 78.540797-27.878954 25.840528-59.8409 47.941895-95.880721 66.302055-36.039821 18.358113-78.880535 34.341133-128.521119 47.940872-49.641607 13.598716-100.979856 19.379373-154.020886 17.3389s-105.400538-8.500605-157.081595-19.379373c-51.680033-10.881838-97.240695-28.220738-136.681986-52.021817-39.440267-23.799032-72.079642-52.700269-97.92017-86.701664C12.455171 732.682122 0.215406 694.943612 1.576403 653.461849c0-43.522236 13.260002-90.101087 39.781028-139.740648 26.520003-49.64263 63.919798-98.601692 112.200408-146.882302 63.920822-63.920822 128.860856-108.461247 194.822151-133.6223 65.960271-25.159006 112.542192-24.139793 139.742694 3.059686 24.478508 24.480554 28.217668 64.261583 11.220552 119.342062-1.359974 5.440919-1.359974 9.18008 0 11.220552 1.359974 2.039449 3.058662 3.399423 5.099135 4.079922 2.037403 0.678452 4.758374 0.678452 8.15882 0 3.399423-0.680499 6.119371-1.360997 8.160867-2.040473l3.059686-1.020236c53.04103-22.440082 99.961666-33.660634 140.761907-33.660634s69.699432 11.56029 86.701664 34.68087c17.000186 23.800056 17.000186 57.46069 0 100.980879-0.681522 5.438872-1.699712 9.18008-3.060709 11.219529-1.357927 2.040473-0.338714 4.420683 3.060709 7.141654 3.3984 2.719948 5.779633 4.418636 7.140631 5.098111 1.360997 0.680499 4.419659 1.701758 9.181103 3.061732 21.76163 6.800893 41.479717 15.639189 59.160401 26.520003 17.681708 10.880815 32.639375 26.520003 44.881187 46.920636C883.883287 590.222549 890.345466 612.32187 891.024941 636.122949L891.024941 636.122949zM849.205487 280.138258c15.639189 18.36016 25.838482 39.10053 30.598902 62.22111 4.758374 23.118534 3.741207 45.559639-3.059686 67.321268-3.40147 8.15882-9.18008 14.619976-17.339924 19.379373-8.160867 4.76042-16.658402 5.439896-25.499767 2.040473-8.162914-3.400446-14.623046-9.18008-19.380396-17.340947-4.758374-8.157797-5.438872-16.660448-2.040473-25.498744 7.482415-23.801079 3.059686-44.541449-13.258978-62.222133-16.319687-17.678638-36.72032-24.479531-61.200874-20.400632-8.841366 2.039449-17.337877 0.679475-25.499767-4.079922-8.16189-4.76042-12.921287-11.901051-14.281261-21.420869-2.040473-9.519818-0.338714-18.019399 5.099135-25.50079 5.439896-7.480368 12.241812-12.239765 20.401656-14.280238 23.121604-4.759397 45.899376-3.739161 68.338435 3.060709C814.523593 250.218832 833.562205 262.457574 849.205487 280.138258zM952.225815 187.318246c32.639375 36.72032 54.057173 79.221296 64.260559 127.500882 10.201339 48.28061 7.481392 93.840248-8.162914 136.681986-3.397377 10.199293-9.859555 18.018376-19.377326 23.459295-9.521864 5.438872-19.380396 6.119371-29.581736 2.039449-10.199293-4.078899-17.679661-10.539031-22.441105-19.379373-4.758374-8.841366-5.779633-18.699897-3.059686-29.580712 10.880815-31.279401 12.919241-63.919798 6.119371-97.919147-6.800893-34.001395-22.101367-63.921845-45.899376-89.76135-23.802102-26.520003-52.020794-44.539402-84.661192-54.060243-32.639375-9.519818-65.281819-11.220552-97.922217-5.100158-10.878768 2.040473-20.738323 0-29.577642-6.120394s-14.618952-14.280238-17.3389-24.480554c-2.721994-10.199293-1.019213-20.060895 5.100158-29.579689 6.118348-9.520841 14.616906-14.959713 25.50079-16.321734 46.239114-9.518794 92.478228-7.479345 138.721435 6.120394C880.144126 124.417661 919.585417 149.917428 952.225815 187.318246L952.225815 187.318246z"
                          p-id="3194"
                          fill="#777777"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
                <p>
                  饭可以一日不吃，觉可以一日不睡，书不可以一日不读。人不犯我，我不犯人；人若犯我，我必犯人。要做人民的先生，先做人民的学生。
                </p>
              </div>
              <div class="single-siderbar-widget popular-post-widget">
                <h4 class="popular-title">最新的文章</h4>
                <div class="popular-post-list mt-30">
                  <ul>
                    <li class="d-flex mb-20 single-post-list">
                      <div class="thumb">
                        <img class="w-100" src="/img/blog/pp1.jpg" alt />
                      </div>
                      <div
                        class="details ml-10 d-flex flex-column justify-content-between"
                      >
                        <a href="#">
                          <h6>杭州走一走</h6>
                        </a>
                        <p class="mb-0">2小时前</p>
                      </div>
                    </li>
                    <li class="d-flex mb-20 single-post-list">
                      <div class="thumb">
                        <img class="w-100" src="/img/blog/pp2.jpg" alt />
                      </div>
                      <div
                        class="details ml-10 d-flex flex-column justify-content-between"
                      >
                        <a href="#">
                          <h6>杭州走一走</h6>
                        </a>
                        <p class="mb-0">2小时前</p>
                      </div>
                    </li>
                    <li class="d-flex mb-20 single-post-list">
                      <div class="thumb">
                        <img class="w-100" src="/img/blog/pp3.jpg" alt />
                      </div>
                      <div
                        class="details ml-10 d-flex flex-column justify-content-between"
                      >
                        <a href="#">
                          <h6>杭州走一走</h6>
                        </a>
                        <p class="mb-0">2小时前</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="single-siderbar-widget post-category-widget">
                <h4 class="post-category-title">文章分类</h4>
                <div class="cat-wrapper">
                  <ul class="cat-list">
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>前端</p>
                        <p>50</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>生活</p>
                        <p>40</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" class="d-flex justify-content-between">
                        <p>杂谈</p>
                        <p>100</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="single-siderbar-widget tag-cloud-widget">
                <h4 class="tag-cloud-title">标签栏</h4>
                <div class="tag-colud-list-wrapper">
                  <ul class="tag-colud-list">
                    <li>
                      <a href="#">有趣</a>
                    </li>
                    <li>
                      <a href="#">好玩</a>
                    </li>
                    <li>
                      <a href="#">有点烦躁</a>
                    </li>
                    <li>
                      <a href="#">有趣</a>
                    </li>
                    <li>
                      <a href="#">好玩</a>
                    </li>
                    <li>
                      <a href="#">有点烦躁</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {
      rows: 100,
      perPage: 5,
      currentPage: 1
    }
  }
}
</script>
<style lang="less">
.page-item.active .page-link {
  background-color: #8490ff;
  border-color: #eee;
}
/* banner */
.banner {
  height: calc(100vh - 70px);
  background: url('/img/home-bg.jpg') center;
  background-repeat: no-repeat;
  @media screen and (min-width: 1300px){
    background-size: cover;
  }
}
.banner .overlay {
  /* background: rgba(0, 0, 0, 0.2); */
}
.banner h1 {
  margin: 0 auto;
  font-size: 48px;
  max-width: 500px;
}
.banner .title {
  position: relative;
}
.banner p {
  font-size: 20px;
}
@media screen and (max-width: 576px) {
  .banner {
    background-position: 75% center;
  }
}

/* category */
.category {
  background-color: #f9f9ff;
}
.category .overlay-bg {
  margin: 7%;
  background: rgba(0, 0, 0, 0.85);
}
@media screen and (min-width: 578px) {
  .category {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.category .single-cat-widget .content-details {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 7%;
}
.category .single-cat-widget .separator {
  height: 1px;
  background-color: #fff;
}

.border-1px {
  position: relative;
}

.border-1px::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  border: 1px solid #eee;
  color: #eee;
  height: 200%;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  pointer-events: none; /* 防止点击触发 */
  box-sizing: border-box;
}
@media screen and (min-device-pixel-ratio: 2),
  (-webkit-min-device-pixel-ratio: 2) {
  .border-1px::before {
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}
@media screen and (min-device-pixel-ratio: 3),
  (-webkit-min-device-pixel-ratio: 3) {
  .border-1px::before {
    width: 300%;
    height: 300%;
    -webkit-transform: scale(0.33);
    transform: scale(0.33);
  }
}

/* post-content */
.post-content-area {
  background-color: #f9f9ff;
}
.post-content-area .single-post a:hover {
  color: #8490ff;
}
.post-content-area .single-post .meta-details {
  text-align: left;
  margin-top: 35px;
}
@media screen and (min-width: 991px) {
  .post-content-area .single-post .meta-details {
    text-align: right;
  }
}
.post-content-area .single-post .meta-details .tags {
  font-size: 0;
}
.post-content-area .single-post .meta-details .tags li {
  display: inline-block;
  font-size: 14px;
}
.post-content-area .single-post a {
  color: #777;
}
.post-content-area .single-post .meta-details .tags li a {
  color: #222;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.post-content-area .single-post .primary-btn {
  background: #fff !important;
  color: #222 !important;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  border-radius: 0px !important;
}
.post-content-area .single-post .primary-btn:hover {
  background: #8490ff !important;
  color: #fff !important;
}
.primary-btn {
  background: #8490ff;
  line-height: 42px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  position: relative;
}
@media screen and (min-width: 991px) {
  .post-content-area .single-post .user-details p {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    text-align: right;
  }
}
.blog-pagination .page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #777777;
  border: none;
  background: transparent;
}
.blog-pagination .page-link .lnr {
  font-weight: 600;
}

.blog-pagination .page-item:last-child .page-link,
.blog-pagination .page-item:first-child .page-link {
  border-radius: 0;
}

.blog-pagination .page-link:hover {
  color: #fff;
  text-decoration: none;
  background-color: #8490ff;
  border-color: #eee;
}

.blog-pagination .page-link:active,
.blog-pagination .page-link:focus,
.blog-pagination .page-link:active {
  outline: none;
}

/* sidebar widgets */
.sidebar-widgets {
}
.widget-wrap {
  background-color: #fafaff;
  padding: 20px 0;
  border: 1px solid #eee;
}
.widget-wrap .single-siderbar-widget {
  margin: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}
.widget-wrap .single-siderbar-widget .search-form input[type='text'] {
  float: left;
  width: 80%;
  color: #fff;
  background-color: #8490ff;
  padding: 10px 20px;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.widget-wrap .single-siderbar-widget .search-form button {
  float: right;
  width: 20%;
  color: #fff;
  background-color: #8490ff;
  padding: 10px 20px;
  border: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.widget-wrap .search-widget ::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #fff;
}

.widget-wrap .search-widget ::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}

.widget-wrap .search-widget :-ms-input-placeholder {
  /* IE 10+ */
  color: #fff;
}

.widget-wrap .search-widget :-moz-placeholder {
  /* Firefox 18- */
  color: #fff;
}

.widget-wrap .user-info-widget .social-links li {
  display: inline-block;
  margin-bottom: 10px;
  color: #222;
}
.widget-wrap .user-info-widget .social-links li a {
  padding: 10px;
}
.widget-wrap .user-info-widget .social-links li a .icon path {
  fill: #222;
}

.widget-wrap .user-info-widget .social-links li a:hover .icon path {
  fill: #8490ff;
  transition: all 0.2s linear;
}

.widget-wrap .popular-post-widget .popular-title {
  background-color: #8490ff;
  color: #fff;
  text-align: center;
  padding: 12px 0;
}
.widget-wrap .popular-post-widget .single-post-list .details h6 {
  font-weight: 600;
  /* margin-bottom: 10px; */
}

.widget-wrap .post-category-widget .post-category-title {
  background-color: #8490ff;
  color: #fff;
  text-align: center;
  padding: 12px 0;
}
.widget-wrap .post-category-widget .cat-list li {
  padding-top: 15px;
  padding-bottom: 8px;
  border-bottom: 2px dotted #eee;
  transition: all 0.2s linear;
}
.widget-wrap .post-category-widget .cat-list li:hover {
  border-bottom: 2px dotted #8490ff;
}
.widget-wrap .post-category-widget .cat-list li:hover p {
  color: #8490ff;
}
.widget-wrap .post-category-widget .cat-list a {
  color: #777;
}
.widget-wrap .post-category-widget .cat-list a p {
  margin: 0;
}

.widget-wrap .tag-cloud-widget .tag-cloud-title {
  background-color: #8490ff;
  color: #fff;
  text-align: center;
  padding: 12px 0;
  margin-bottom: 30px;
}
.widget-wrap .tag-cloud-widget .tag-colud-list li {
  display: inline-block;
  border: 1px solid #eee;
  padding: 4px 14px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}
.widget-wrap .tag-cloud-widget .tag-colud-list li:hover {
  background-color: #8490ff;
  color: #fff;
}
.widget-wrap .tag-cloud-widget .tag-colud-list li a {
  font-size: 12px;
  color: #222;
}
.widget-wrap .tag-cloud-widget .tag-colud-list li:hover a {
  color: #fff;
}
</style>
