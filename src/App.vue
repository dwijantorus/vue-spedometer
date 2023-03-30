<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    
        <vue-speedometer 
          :width="460"
          :maxSegmentLabels="11"
          :segments="11"
          :value="-8"
          :minValue="-50"
          :maxValue="50"
          :segmentColors='["#EB7853",  "#EB7853"]'
          needleColor='#000080' 
          :currentValueText='"${value}%"'
          textColor="${textColor}"
        />
          <vue-speedometer 
            :needleHeightRatio="0.7"
            :maxSegmentLabels="5"
            :segments="3"
            :customSegmentStops="[0, 500, 750, 900, 1000]"
            :segmentColors='["firebrick", "tomato", "gold", "limegreen"]'
            :value="333"
          />

      
      <vue-speedometer 
        :forceRender="true"
        :maxSegmentLabels="12"
        :segments="11"
        :customSegmentStops="[0, 400, 1000]"
        :segmentColors='["#5959ac", "#AAA"]'
        needleColor="#5959ac"
        :currentValueText='"Current Value: \${value}%"'
        :value="400"
        textColor="${textColor}"
      />

      <vue-speedometer 
        :minValue="100"
        :maxValue="500"
        :value="400"
        needleColor="steelblue"
        textColor="${textColor}"
      />

      <vue-speedometer 
        :needleHeightRatio="0.7"
        :value="777"
        :customSegmentStops='[0, 250, 750, 1000]'
        :segmentColors='["#9399ff", "#14ffec", "#00bbf0"]'
        currentValueText="How are you?"
        :customSegmentLabels='[
          {
            text: "Good",
            color: "#000",
          },
          {
            text: "Great",
            color: "#000",
          },
          {
            text: "Awesome!",
            color: "#000",
          },
        ]'
        :ringWidth="47"
        :needleTransitionDuration="3333"
        needleTransition="easeElastic"
        needleColor="#a7ff83"
        textColor="#d8dee9"
      />
        <div style="color: ${textColor}">
        Fluid width takes the width of the parent div (<strong>500px</strong> in this case)
        </div>

        <div>
        <div style="position:relative">

          <div style="position:absolute">
            <vue-speedometer 
              :width="460"
              :needleHeightRatio="0.5"
              :maxSegmentLabels="11"
              :segments="11"
              :value="-8"
              :minValue="-50"
              :maxValue="50"
              :segmentColors='["#EB7853", "#ECEFF4"]'
              needleColor='#fff' 
              valueTextFontSize="0px"
              textColor="${textColor}"
            />
          </div>
          <div style="position:absolute">
        <vue-speedometer 
          :width="460"
          :needleHeightRatio="0.5"
          :value="-10"
          :minValue="-50"
          :maxValue="50"
          :customSegmentStops='[-50, 0, 50]'
          :segmentColors='["#17a2b8", "#dc3545"]'
          currentValueText="${value}%"
          valueTextFontSize="22px"
          :customSegmentLabels='[
            {
              text: "Lower Budget",
              color: "#fff",
            },
            {
              text: "Over Budget",
              color: "#fff",
            },
          ]'
          :needleTransitionDuration="3333"
          needleTransition="easeElastic"
          needleColor="#0062cc"
          textColor="#000"
        />
        </div>
        
        
      </div>
  </div>
        <vue-speedometer 
        :width="500"
        :needleHeightRatio="0.7"
        :value="777"
        currentValueText="Happiness Level"
        :customSegmentLabels='[
          {
            text: "Very Bad",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Bad",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Ok",
            position: "INSIDE",
            color: "#555",
            fontSize: "19px",
          },
          {
            text: "Good",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Very Good",
            position: "INSIDE",
            color: "#555",
          },
        ]'
        :ringWidth="47"
        :needleTransitionDuration="3333"
        needleTransition="easeElastic"
        needleColor="#a7ff83"
        textColor="#d8dee9"
      />

      <vue-speedometer 
        :width="500"
        :needleHeightRatio="0.7"
        :value="0"
        :customSegmentLabels='[
          {
            text: "-50%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "-40%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "-30%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "-20%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "-10%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "0%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "10%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "20%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "30%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "40%",
            color: "#000000",
            position: "OUTSIDE"
          },
          {
            text: "50%",
            color: "#000000",
            position: "OUTSIDE"
          },
        ]'
        
        :minValue="-51"
        :maxValue="50"
        :customSegmentStops='[-51, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50]'
        :segmentColors='["#9399ff", "#14ffec", "#00bbf0"]'
        currentValueText="How are you?"
        :ringWidth="47"
        :needleTransitionDuration="3333"
        needleTransition="easeElastic"
        needleColor="#a7ff83"
        textColor="#d8dee9"
      />
    aaaa
    <HelloWorld msg="Hello Vue in CodeSandbox!"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import VueSpeedometer from "vue-speedometer";

export default {
  name: "App",
  created() {
    setInterval(() => (this.toggle = !this.toggle), 1111);
  },
  data() {
    return {
      toggle: false
    };
  },
  components: {
    HelloWorld,
    VueSpeedometer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
