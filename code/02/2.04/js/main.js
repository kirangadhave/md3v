/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/
/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/


d3.select('#chart-area').append('svg')
		.attr('width', 400)
		.attr('height', 400)
		.append('circle')
			.attr('cx', 200)
			.attr('cy', 200)
			.attr('r', 70)
			.attr('fill', 'gray')

var svg = d3.select('#chart-area').append('svg')
									.attr('width', 500)
									.attr('height', 400)

var line = svg.append('line')
				.attr('x1', 500)
				.attr('y1', 0)
				.attr('x2', 0)
				.attr('y2', 400)
				.attr('stroke', 'blue')
				.attr('stroke-width', '1')

var rect = svg.append('rect')
				.attr('x', 0)
				.attr('y', 0)
				.attr('width', 70)
				.attr('height', 50)
				.attr('fill', 'gray')

var circ = svg.append('circle')
				.attr('cx', 300)
				.attr('cy', 250)
				.attr('r', 50)
				.attr('fill', 'red')