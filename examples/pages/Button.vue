<template>
  <wing-blank>
    <x-button size="mini">default</x-button>
    <x-button size="mini" type="ghost">ghost</x-button>
    <x-button>default</x-button>
    <x-button type="danger">danger</x-button>
    <x-button type="ghost">ghost</x-button>
    <x-button disabled>disabled</x-button>
    <flex>
      <flex-item><x-button type="ghost">back</x-button></flex-item>
      <flex-item><x-button>submit</x-button></flex-item>
    </flex>
    <x-button circle>default</x-button>
    <x-button type="danger" circle>danger</x-button>
  </wing-blank>
</template>

<script>
export default {
  
}
</script>