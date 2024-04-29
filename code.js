index = 0
function changeText() {
  const quotes = [
    `In this world, wherever there is light, there are always shadows. As long as there is a concept of victors, the vanquished will also exist. The selfish desire for peace gives rise to war. And hatred is born in order to protect love.`,
    `Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.`,
    ` you are merely a momentary life, a temporary existence of coalesced energy...energy that once was a single, ultimate form!`,
    `Thinking of peace whilst spilling blood is something that only humans could do.`,
    `Man seeks peace, yet at the same time yearning for war… Those are the two realms belonging solely to man.`,
    `The moment people come to know love, they run the risk of carrying hate.`,
    `Oh, you know… it's fun, it's part of my plan… to start a war… to bring peace`,
    `I want to sever the fate of this world. A world of only victors. A world of only peace. A world of only Love. I will create such a world.`,
    `Power is not will, it is the phenomenon of physically making things happen.`,
    `I taught you that in order to control people, you need to use the darkness in their hearts. And if there's no darkness, then you just create it…`,
  ];
    document.getElementsByTagName(`p`)[0].innerHTML = quotes[index++]
  if (index > quotes.length - 1)
    index=0

    
}