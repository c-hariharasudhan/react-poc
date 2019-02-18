import chai from 'chai';
import React from 'react';
import {Hello} from '../../src/Components/HelloComponent';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
 
configure({adapter: new Adapter()});

const expect = chai.expect;

describe("Hello Component", () => {
    it('Renders one h1 tag', () => {
        const wrapper = shallow(<Hello />);
        expect(wrapper.find('h1')).to.have.length(1);
    })
})
