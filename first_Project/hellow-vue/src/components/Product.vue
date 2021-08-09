<template>
       
<div class="product">
       <div class="product-image">
              <img v-bind:src="image" >
       </div>
       <div class="product-info">
              <h1>{{ title }}</h1>
              <p v-if="inStock==true">in stock</p>
              <p v-else>out stock</p>
              <ul >
                     <li  v-for="(n,i) in details" :key="i">
                            {{ n }}
                     </li>
              </ul>
              <div
                     @mouseover="updateProduct(index)"
                     v-for="(k,index) in variants" 
                     :key="k.variantId"
              class="color-box"
              :style="{backgroundColor: k.variantColor}">
                     <p> {{ k.variantColor }}</p>
              </div>

              <button 
              @click="addToCart"
              :disabled="!inStock" 
              :class={disabledButton:!inStock}>Add to Cart</button>
              
       </div>
       </div>
       
</template>

<script>
export default {
       data(){
              return {
                     product:'Socks',
              selectedVariant:0,
              inventory:10,
              details:["80% cotton","20% polyester","Gender-neutral"],
              variants:[
                     {variantId:2234,
                     variantColor:'green',
                     variantImage:require('@/assets/images/socks_green.jpg'),
                     variantQuantity:2},
                     {variantId:2235,
                     variantColor:'blue',
                     variantImage: require('@/assets/images/socks_blue.jpg'),
                     variantQuantity:2}
              ],
              brand:"Vue"
              }
       },
       methods:{
              addToCart(){
                     // this.cart++;
                     this.variants[this.selectedVariant].variantQuantity--;
                     this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId);
              },
              updateProduct(index){
                    this.selectedVariant=index;
              }
       },
       computed:{
              title(){
                  return   this.brand+' '+this.product;
              },
              image(){
                     console.log(this.variants[this.selectedVariant].variantImage);
                     return this.variants[this.selectedVariant].variantImage;
              },
              inStock(){
                     return this.variants[this.selectedVariant].variantQuantity;
              }
              
       }
};
</script>