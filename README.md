flex wrap basis max-width study
---
css shadow를 넣을때는 클릭해야하는 입체감있는 아이콘일때만
나머진 심플하게 1차원으로

.nav-link
  // responsive; laptop => changing padding
  @media screen and (min-width: 921px)
    padding: 0 16px
    line-height: 72px


----

How layout?
  display: flex
  flex-direction: column
  min-height: 100%

<Parent>
padding ( outline ) (**why padding? Because It controls outline of only one elements)

 <first child>
 -- display: flex
    flex-wrap: wrap
    margin: v1, v2, v3, v4 (**why margin? Beacuse It controls relasionship between elements)

<second child>
 ----
     flex-basis: 50%
     max-width: 50%
     padding: 0
     margin: 0 0 48px(space of bottom) 0
    
    <third child>
    ------- padding - control layout of the element
             margin - control layout of between multiple elements


    <final child;the target>
     ---------------- img: width: 100%


about 부터는 스스로 도전해보고 안되면 카피하라!