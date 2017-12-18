<template>
	<div class="experience">

    <div id="c2">

      <div class="left">
        {{ $t('message.c2_during') }}

      </div>

      <div class="right">
        {{ $t('message.c2_name') }}
        <br>
        {{ $t('message.c2_position') }}
        <br>
        {{ $t('message.c_details') }}
        <br>
        {{ $t('message.c2_details_01') }}
        <br>
        {{ $t('message.c2_details_02') }}
        <br>
        {{ $t('message.c2_details_03') }}

      </div>

    </div>

    <div id="c1">
      <div class="left">
        {{ $t('message.c1_during') }}

      </div>

      <div class="right">
        {{ $t('message.c1_name') }}
        <br>
        {{ $t('message.c1_position') }}
        <br>
        {{ $t('message.c_details') }}
        <br>
        {{ $t('message.c1_details_01') }}
        <br>
        {{ $t('message.c1_details_02') }}
        <br>
        {{ $t('message.c1_details_03') }}
        <br>
        {{ $t('message.c1_details_04') }}
      </div>

    </div>



	</div>
</template>

<style scoped>
.experience{
  width: 70%;
  /*height: 90%;*/
  position: absolute;
  margin: 0% 10%;
  padding: 5%;
  text-align: left;
  background-color: #fff;
}

#c1,#c2{
  display: flex;
  margin-bottom: 5%;
}

.left{
  /*flex: 1;*/
}

.right{
  width: 90%;
}

</style>