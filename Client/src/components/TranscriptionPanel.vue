<template>
  <div class="transcribe-page container-fluid mt-2">
    <b-row align-v="start">
      <b-col md="8">
        <!-- Column Two work area -->
        <div id="transcribe-section">
          <div id="work-page" class="container">
            <WeeklyTask class="mb-4"></WeeklyTask>
            <div class="header mb-4 row">
              <div class="col-md-10 col-8">
                {{ $t('main.work_area.intro_line_1') }}
                {{ $t('main.work_area.intro_line_2') }}
              </div>
              <div class="video_tut col-md-2 col-4">
                <a
                  :href="$t('main.work_area.video')"
                  :title="$t('main.work_area.video_hover')"
                  target="_blank"
                >
                  <img src="@/assets/images/video_thumb.png" />
                  {{ $t('main.work_area.video_hover') }}
                </a>
              </div>
            </div>
          </div>
          <TranscriptionLine />
        </div>
      </b-col>
      <b-col md="4">
        <InfoTabs id="map-section" class="d-flex flex-column" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TranscriptionLine from "@/components/TranscriptionLine";

import WeeklyTask from "@/components/WeeklyTask";
import InfoTabs from "@/components/InfoTabs";

export default {
  data() {
    return {
      show_side: false
    };
  },
  components: {
    TranscriptionLine,

    WeeklyTask,
    InfoTabs
  },
  methods: {
    showHelp() {
      this.$store.dispatch("general/showHelp", true);
    }
  },

  head() {
    return {
      title: `Tikkoun Sofrim - ${this.manuscript.display_name} - Transcribe`
    };
  },
  computed: {
    line() {
      return this.$store.state.transcribe.selected_line;
    },
    manuscript() {
      return this.$store.state.transcribe.manuscript;
    }
  },
  watch: {
    line: function(res) {
      if (res) {
        this.$router.push(
          `/transcribe/${this.$store.state.transcribe.manuscript.name}/${res.page}/${res.line}`
        );
      }
    }
  },
  // Maybe watch on line from store
  async mounted() {
    await this.$store.dispatch("transcribe/GET_TASK");
    const routeParams = this.$route.params;
    const user = this.$store.state.auth.user;
    if (user) {
      if (
        user.transcribe_mode &&
        user.transcribe_mode == "tasks" &&
        this.$store.state.transcribe.task
      ) {
        this.$store.dispatch("transcribe/getTaskLine", {
          uid: user.uid,
          isAnonymous: user.isAnonymous
        });
      } else if (routeParams && routeParams.line) {
        this.$store.dispatch("transcribe/getLine", {
          msId: this.$store.state.transcribe.manuscript.id,
          page: +routeParams.page,
          line: +routeParams.line
        });
      } else {
        this.$store.dispatch("transcribe/getNextLine", {
          uid: user.uid,
          isAnonymous: user.isAnonymous
        }); // Later add line params
      }
    }

    // Get manuscript content - for the instruction tabs
    const currentLang = this.$i18n.availableLocales.find(l => {
      return l === this.$i18n.locale;
    });
    this.$store.dispatch("content/getManuscriptContent", {
      manuscript: this.$store.state.transcribe.manuscript.name.toLowerCase(),
      lang: currentLang
    });

    // Adjust style
    const mapSectionHeight = window.innerHeight - 110;
    const mapSectionElem = document.getElementById("map-section");
    if (mapSectionElem) {
      mapSectionElem.height = mapSectionHeight;
    }
  }
};
</script>
<style lang="scss">
.line-info {
  direction: ltr;
  text-align: left;
  font-size: 12px;
  white-space: nowrap;
}
.video_tut {
  a {
    img {
      width: 100%;
      border: 1px solid black;
    }
  }
}
</style>
