.nav-link
  // responsive; laptop => changing padding
  @media screen and (min-width: 921px)
    padding: 0 16px
    line-height: 72px


----

How layout?

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