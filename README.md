# Ponzir

A Node.js implementation of a  distributed TCP client adhering to the Ponzir standard.

# Usage

    ./ponzir.js <ARGUMENTS>

## Arguments

    --establish
      Tells this node that you are intending on creating a new network

    --port=12212
      Which port the server should listen on

    --iface=*
      Which interface we should listen on, e.g. 192.168.1.1.

    --name=<RANDOM>
      What do you want to name this node? Needs to be unique amongst siblings.

    --parent=<HOSTNAME>:12212
      Which existing-node should we use as a parent. Do not use with --establish.
