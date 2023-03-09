const passo1 = (ctx, nextx) => {
    ctx.valo1 = 'mid1'
    nextx()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'