This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## What is the bug?

The bug is that `useEffect` is not working properly in dynamically generated pages after `exporting` the app using `yarn next export`.

The exported project is found inside `out`.

You will noticed that the useEffect is properly working in [index.html](/out/index.html). It is displaying the `Welcome to Next.js!` heading.

Now in the dynamic page [test/1.html](/out/test/1.html), the words `I am visible!` are not shown.

This bug is not visible in the `development` mode of next.js (`yarn dev`).
