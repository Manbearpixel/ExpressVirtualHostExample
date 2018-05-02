# ExpressVirtualHostExample

A simple example of a virtual host setup using NodeJS and Express applications.

## Getting Started

Virtual Hosts allow you to handle multiple domain names through a single server instance compared to having to run a separate server per host configuration. This will share **all system resources** such as memory, processor cycles, and storage across all your applications.

[ExpressJS](https://expressjs.com/) is a minimal and flexible web application framework that runs ontop of [Node.js](https://nodejs.org/en/). Express allows for both dynamic and static website hosting and is ideal for this scenario.

### Prerequisites

1 -- Install [Node.js and npm](https://nodejs.org/en/download/) if they are not already installed on your machine.
> Verify that you are running at least node 6.9.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.

2 -- Optionally, install `Git` if you do not have it already installed on your machine. If you do not install Git, you will have to download this repository separately as a zipped folder and unzip it later.

3 -- Have ownership over a website(s) and ability to modify the DNS/Network configuration for each host.

4 -- Create `A` DNS records for each host you want your server instance to manage and have it set to the IP Address of your sever.

### Installing

1 -- Clone this repository onto your server instance using `Git`. If you do not have Git installed, you will need to download this repository as a folder and unzip it.

```sh
git clone https://github.com/Manbearpixel/ExpressVirtualHostExample.git
```

2 -- In your terminal/console window install the dependencies this project requires.

```sh
# switch to the downloaded repository
cd ExpressVirtualHostExample

# install dependencies
npm install
```

3 -- If you are going to use the example express application sub directories (admin, dash, and proto) install their dependencies as well.

```sh
# install sub-folder dependencies (this includes: admin/, dash/, proto/
npm init
```

4 -- You will need to edit `boot.js` properly by pointing your domain names (example.com) or subdomain names (sub.example.com) to the respective folder. You can use the current example folders to play with for now (admin, dash, proto).

```js
// This function creates a virtual host for a specified "domainName"
// and will send traffic to the "directoryPath"
function createVirtualHost(domainName, directoryPath)
...

// This creates an instance of a virtual host and will route traffic
// that hits "dash.example.com" to the folder "dash/"
let dashboardHost = createVirtualHost('dash.loki.chat', 'dash');
...

// This tells the primary Express App to use the virtual host instance
// created earlier
app.use(dashboardHost);
```

### Running

To run the Express VirtualHost server, simply run the command `npm run start`. This will listen to traffic hitting your server (default port = :80). Assuming you have the proper DNS settings for your websites and matching domains set in `boot.js` then traffic will flow properly. You can turn off your server by stopping this process.

If you want to run your server indefinitvely (until you stop it later) and have this server process run in the background, you can install `forever` via npm and execute the `boot.js` file.

```
# install foreverjs globally
npm install forever -g

# execute boot.js "forever" ...until you manually stop it
forever start boot.js

# lists all processes managed by foreverjs
forever list

# stop a specific forever process, replace 0 with the proper number
forever stop 0
```

## Built With

* [Node.js](https://nodejs.org/en/) - The JavaScript runtime engine
* [Express](https://expressjs.com/) - Web application framework
* [Vhost](https://github.com/expressjs/vhost) - VirtualHost middleware for Express

## Contributing

No contributions at this time.

## Versioning

Using [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Manbearpixel** - *Initial work* - [Manbearpixel](https://github.com/Manbearpixel)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

