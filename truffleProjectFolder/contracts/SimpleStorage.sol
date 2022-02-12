// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {

    uint storeddata;

    function set(uint x) public {

        storeddata = x;
    }

    function get() public view returns (uint) {

        return storeddata;
    }
}
