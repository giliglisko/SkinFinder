
# Project Title

This automation is using Nightwatch with NodeJs to compare CSGO Skin prices between two websites, CSGOMoney, and the official Steam Market. 
The automation first goes to CSGO Money, searches for the skin the user asked for, sorting it by the highest discount in order to see the best price, and then comparing the stats to Steam Market. Afterwards, the automation outputs a side by side comparison of the results and tells the user which site he should buy from.

The automation was ment for gamers who look for a better and faster way to compare skin prices in csgo.

## Run Locally

Clone the project

Go to the project directory

Install dependencies

```bash
  npm install
```
Run the script

```bash
  npx nightwatch --arg1=<weapon> --arg2=<skinName>
```
Example

```bash
  npx nightwatch --arg1=ak --arg2=redline
```


## Authors
Gili Glisko
- [@GitHub](https://github.com/giliglisko)
- [@LinkedIn](https://www.linkedin.com/in/gili-glisko-49b718272/)
- [@Email](MAILTO:giliglisko1@gmail.com)


