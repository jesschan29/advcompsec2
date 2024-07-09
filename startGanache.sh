#!/bin/bash

# Start Ganache with accounts and balances (adjust as needed)
ganache-cli --account="0x5ad0e06ab82a96d6d4c95b50cff9e56bea6a7afe7b6e955ecd3642f1fcb0baa4,1000000000000000000000" \
            --account="0x1b6bb461d7e7910e38490cabbdda7d0bce0a1019865cce9e85776f4b9b41314c,1000000000000000000000" \
            --account="0x916e672a608d1a4c817c81153fef9cedc4dabf925687704e6a895c8889378a58,1000000000000000000000" \
            --account="0x4a41adab0cd944755b9933d0001b729a88d6e7ea297d779d6190e05765b554a1,1000000000000000000000" \
            --account="0xc7f358626bd092a7e79a69821666040391f21b24d0e44cda77c5605dc90a3594,1000000000000000000000" \
            --account="0xf3c6992d755bb1ccb61282eb3b5372dd8cff2227a5338f0043c508149148da04,1000000000000000000000" \
            --account="0x6450abb82a7a4062757ea161046d42d451744485bc9f133a983ebd30c103cffe,1000000000000000000000" \
            --account="0x458b55fed62926fde943317e937cff7bad81e9264da6e000d011b757fcb31d68,1000000000000000000000" \
            --account="0x8f20a03701a08800cf3b9f7ed33474f95408ac17d4c59fb030e1396dfb3a112b,1000000000000000000000" \
            --account="0x4ce84b2e5bc51a202585813ede547d03e452bc6a1933fb52b6d6f4c40b340bfc,1000000000000000000000" \
            > ganache.log 2>&1 &

# Capture the process ID (PID) of Ganache
GANACHE_PID=$!

# Wait for Ganache to start (adjust time if needed)
sleep 5

# Output Ganache process ID for debugging purposes
echo "Ganache process ID: $GANACHE_PID"

# Run your Node.js server (server.js)
node server.js
