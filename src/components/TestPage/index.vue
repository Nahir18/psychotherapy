<template>
  <div>
    <div
        class="test-page-header"
    >
      <div class="fs-30px fw-700 color-black">
        Тест
        <br>
        на уровень
        <br>
        тревожности
      </div>
      <br>
      <div class="color-white fs-19px">
        Тревога — сильное переживание дискомфорта от неопределенности перспективы.
        <br>
        Нормально, когда тревога возникает в угрожающей ситуации, усиливается в условиях субъективной значимости выбора при недостатке информации или в условиях дефицита времени.
        <br>
        Существует также патологическая тревога. Она отличается от нормальной если не связана с реальной угрозой, обусловлена внутренними причинами, не адекватна значимости ситуации и имеет конкретные клинические проявления.
      </div>
    </div>
    <div class="test-content">
      <div class="test-description fs-13px color-black">
        Прочитайте внимательно каждое утверждение, и отметьте галочкой ответ, который в наибольшей степени соответствует тому, как вы себя чувствовали на прошлой неделе. Не раздумывайте слишком долго над каждым ут­верждением. Ваша первая реакция всегда будет более верной.
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "TestPage"
}
</script>

<style scoped>
  .test-page-header {
    background-color: rgba(111, 113, 31, 0.56);
    border-radius: 0 0 0 209.65px;
    padding: 30px 146px 40px;
    text-align: start;
  }
  .test-description {
    padding-left: 11%;
    padding-right: 7%;
    /*border-left: 2px var(--color-dark-green-2);*/
    border-left: black 2px;
  }

</style>