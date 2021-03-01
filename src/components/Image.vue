

<script>
import { ref } from 'vue'
export default {
  setup() {
    const kitty = ref('')
    const error = ref(null)
    const loading = ref(false)

    const getKitty = () => {
      loading.value = true
      error.value = null

      fetch('https://res.cloudinary.com/mayashavin/image/upload/f_auto,q_auto,w_500/v1607546879/cat_2')
        .then(img => kitty.value = img.url)
        .catch(e => error.value = e.message)
        .finally(() => loading.value = false)
    }

    return () => (
      <div class="wrapper">
        {kitty.value && <img src={kitty.value} />}
        {error.value && <span>{error.value}</span>}
        {loading.value && <span>Loading</span>}
        <button onClick={getKitty}>Get Kitty</button>
      </div>
    )
  }
}
</script>

<style>
.wrapper img, .wrapper span {
  margin: 1rem auto;
  display: block;
}
</style>