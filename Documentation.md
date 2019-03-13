#	Documentation

#Base-number
When number button is clicked and resultEvaluation is false
	>	If last entry of Output is Base-operator
	>		set Display to Number
	>	else
	> 		set Display to Display+ Number
When number button is clicked and resultEvaluation is true
	>	create and set list item One to Output
	>	create and set list item Two to Display
	>	if History already has a child
	>		prepend list item One and Two, in order, to History
	>	else
	>		append list items One and Two, in order, to History
	>
	> 	set Output to empty
	> 	set Display to Number
	> 	set resultEvaluation to false

#Base-opeator
When Base-operator is clicked
	> 	If last entry of Ouput is Base-operator
	>		change last entry of Output to Base-operator
	>	else
	>		set Output to Display plus Base-operator

#Equal button
//	When Equal is clicked and evaluateResult is true
	>	set Output to Output
	>	set Display to Display
//	When Equal is clicked and evaluateResult is false
	>	if Output is empty
	>		set Display to Display
	>	else
	>		create evaluationCandidate & set to Output plus Number
	>		set Output to Output plus Diplay
	>		set Display to evaluated evaluationCandidate
			set evaluateResult to true
