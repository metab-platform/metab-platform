const a=[0,0,0,.72,0,.49,.01,.04,.24,.12,0,.16,.91,0,0,.22,.06,.24,.16,.59,.79,.12,.6,0,0,0,.11,.07,0,.24,.02,.52,0,.72,.01,.15,0,0,.23,0,.24,0,0,.45,.59,.02,1,.98,.02,.55,.72,.47,0,0,0,.01,0,.95,.05,0,.46,0,0,.57,0,.12,0,0,.67,.47,.16,0,.98,.56,0,.92,.2,.55,0,.02,0,0,.08,0,.8,.12,0,.27,0,0,.83,.63,1,0,.2,.93,0,.24,.78,.13,.64,0,0,.12,0,.54,.64,.61,0,0,.38,.93,.54,0,.16,0,.14,.26,.5,0,.04,.53,0,.52,.07,0,0,.81,.65,0,.01,0,.11,.03,0,.74,.02,.57,.36,.75,0,.67,0,0,.89,.19,.9,.44,0,.2,0,0,.76,.34,.01,.94,.34,.75,.04,0,.48,0,.96,.89,.62,.79,0,.37,.9,0,.67,.06,.01,0,0,.04,.97,.04,.47,0,.96,.45,.81,0,0,.58,.16,.3,.78,.29,.05,.19,.16,0,0,0,0,.01,.98,.41,.8,.01,0,.75,0,0,.32,.49,.92,.34,0,0,.81,0,1,.26,.97,.06,.06,.17,0,.03,.02,0,0,0,0,.19,.03,.01,.24,.27,0,0,.02,.34,0,.45,.46,.52,.19,0,0,0,.53,0,.24,.59,0,.51,.08,.17,.01,.09,0,.64,.1,.2,.85,0,.77,.47,.14,0,.56,0,.87,0,.77,0,.17,0,0,0,0,.75,0,.78,0,.03,.46,.19,.04,0,.26,0,.68,0,.75,.02,.16,.79,0,0,.69,0,.42,.08,.08,.58,.96,0,.38,.01,.32,.01,.27,.09,.89,.29,0,.28,.54,.89,0,.62,.33,.59,0,.3,0,.98,0,0,.03,.57,0,.18,.01,.3,0,0,.04,.56,.21,.61,.05,.01,.08,.51,.23,0,.29,.38,0,0,.25,.79,0,.22,0,0,.27,.41,0,.01,.16,.79,0,0,.02,.69,.32,.62,1,0,.19,0,.11,.56,0,.03,.49,.42,.46,.36,.01,0,.39,.84,.41,.1,.24,.8,.86,0,.51,.3,0,0,0,.75,.42,.65,.48,0,.31,.05,.31,.01,.35,.61,0,.01,.82,.39,0,0,0,0,0,0,.01,0,.4,.57,0,0,.5,0,.4,0,.06,.56,.01,0,0,.65,.51,0,0,.29,0,.48,.08,0,0,0,0,0,0,0,0,.91,.28,0,0,0,.45,.01,.81,.29,0,.67,.05,.97,.24,0,.77,.03,0,0,0,.9,.94,.19,0,.69,0,0,.97,0,0,.57,.47,0,0,.03,0,.95,0,0,0,.27,.09,.91,0,0,0,0,.64,.18,.06,.04,0,0,.2,.09,0,0,.77,.58,0,0,0,.11,.06,0,0,.57,0,.52,0,.61,.1,.37,.93,.04,.74,0,.34,0,.34,.08,.04,.55,.22,.01,.62,0,.23,.16,.03,0,1,.86,.38,0,.33,.02,.13,.79,.69,.01,.09,.8,.92,.01,0,.16,.43,0,0,0,0,.55,.01,.01,0,.09,0,.06,.28,0,.1,.01,.16,.98,.78,.85,0,0,.98,0,0,0,.03,.37,.69,.01,.1,.13,0,.49,.01,0,0,0,.27,0,.02,.53,.61,0,0,0,0,0,.04,.53,0,0,0,.75,0,.2,.41,.88,.36,.16,.3,0,.93,.23,.05,.52,0,0,.82,.8,.53,.27,.03,.03,.84,.68,.82,.8,0,0,.56,0,.04,.32,0,.06,0,0,0,.25,.11,0,.53,.07,0,0,.04,0,.06,.01,.76,0,.61,0,0,.52,0,.4,.03,.13,0,0,0,.81,.23,.97,.84,.92,0,0,.03,.3,.17,.5,0,0,0,0,.01,.31,.18,.59,0,0,.46,.35,0,0,0,0,.57,.34,.86,.07,.61,.01,0,.7,0,0,0,.27,.01,0,.99,.96,.06,0,.68,.03,0,0,.78,.92,.48,.09,.78,.64,.02,.38,.21,0,0,.32,0,0,.13,.7,.03,0,0,.91,0,.16,.45,.05,0,.31,.01,.04,0,0,.81,.02,.36,0,.03,0,.86,.01,.15,.06,.44,.01,0,.13,.32,0,0,.26,0,.81,0,.01,0,0,0,.27,.82,.26,.06,.49,0,.48,.73,.02,.68,0,0,.97,0,.06,.84,0,0,0,.12,.72,0,.25,.44,.92,0,0,0,.58,0,0,0,.01,.15,.02,0,0,0,0,.6,.44,.9,.7,.95,.05,0,.44,0,0,0,.16,.8,0,.91,.18,0,0,.28,0,.51,.53,.75,.94,.97,0,.26,.93,.73,.26,.66,.69,.12,.45,0,0,.43,0,.41,0,.89,.06,.24,.83,.24,.04,.01,.96,.8,.07,.95,.6,.78,.05,0,0,.61,.01,.62,.11,.09,.36,.32,0,.01,.79,.66,.7,.35,.88,0,.74,.3,.53,.09,0,.36,0,0,.1,.77,0,0,0,0,0,0,.06,0,.55,0,.01,0,0,.01,.3,.98,.43,.75,0,.07,.27,.73,.09,.27,.02,.42,.05,0,.01,.88,.1,0,.93,.21,.82,0,0,0,0,.9,0,0,.98,.18,0,0,0,0,0,.89,.61,0,0,.68,.09,.98,0,.2,.09,0,0,.38,.6,0,.65,.65,.4,.49,.23,0,.01,0,.11,0,.14,0,.69,0,.91,.72,.68,0,.08,.51,.19,0,0,0,0,.54,.03,.19,0,0,.02,.7,.09,.92,0,0,.6,.54,.16,.47,0,.46,0,.02,.34,.68,.99,.76,.04,.96,.45,.61,.56,.75,.06,.37,.04,.23,.85,.38,0,.18,.55,.75,.05,.51,0,.25,.17,0,.12,.01,0,.51,.12,0,.45,.34,.48,.01,.38,0,.18,.89,.06,0,0,0,.07,.01,0,.76,.17,.03,.58,.51,.02,.73,0,.12,0,0,.77,.01,.04,.06,.73,.74,0,.79,.97,.54,0,.19,.06,.19,.65,0,.19,.25,.75,.02,0,.27,0,0,.01,0,0,.67,.06,.75,.52,.93,.05,.98,.01,.08,0,.18,0,0,.13,0,0,0,.35,0,0,0,.21,0,.16,0,.01,0,.28,0,.57,.55,.42,.84,.82,.51,.79,.54,0,.92,0,.63,0,.17,.83,.04,.63,.13,0,.34,.85,.01,0,0,.01,.33,0,0,.67,.49,.12,0,.05,.68,.04,0,.9,0,0,0,0,.68,.33,.86,0,.34,.44,.91,.04,.64,.97,0,.02,.84,.06,0,.02,0,0,0,.14,.03,.05,0,.4,0,.11,0,.48,0,.62,0,.3,.53,0,0,.84,0,0,.25,0,.05,.01,0,.06,0,.88,.2,0,0,.09,.11,0,.65,0,.08,0,.06,0,0,.01,0,.27,0,0,0,.68,.76,0,0,.7,.9,0,.06,.97,.63,.92,.38,.93,.13,.5,.2,0,0,.1,0,0,0,.66,.48,.83,0,0,0,.12,.81,.94,.83,0,0,.9,0,.2,.99,.67,.11,.89,0,.06,0,0,0,0,.53,0,.18,.04,.3,.42,.95,1,0,.1,0,0,.03,0,0,.05,0,.19,0,.8,0,.65,.03,.93,0,.84,.61,.79,.05,0,0,0,.06,.48,.52,0,0,0,0,0,.19,.87,.19,0,.74,.48,0,.32,.2,0,0,0,.9,.1,.69,.01,0,.63,.49,.69,.05,0,.28,.34,0,0,0,.65,.73,0,.03,.23,.24,.05,0,.89,.19,0,.87,.03,.44,0,.07,.57,.3,0,.37,.73,.94,.86,0,.01,.43,.76,.02,.89,.86,.09,0,0,.71,.17,0,.23,0,.83,1,.45,0,.25,.81,0,.8,.33,.01,0,.17,0,.7,0,.1,.48,.26,.08,.51,.1,.01,0,.81,0,.38,.07,0,0,0,.11,0,.04,.03,.76,.23,0,0,0,.03,.89,.03,.5,0,0,.26,.1,.85,0,.25,.56,.12,.98,0,.53,.98,.85,.01,.8,0,.15,.99,0,.16,.3,0,.89,0,0,.48,.11,1,.22,.28,0,0,0,.83,.01,.86,.96,.73,0,0,0,.26,0,0,0,0,.71,.06,.8,.54,.97,0,.08,.01,0,.19,.06,.04,0,.97,.23,0,.01,0,.05,0,0,.02,.09,.15,.01,.09,.01,.01,0,.01,.64,.24,.03,0,0,0,.12,.64,0,.74,.86,.53,0,.12,.4,0,.42,.02,.02,0,.06,.56,0,.02,0,.51,.87,.08,.22,0,0,.06,0,.46,.93,.22,.19,.83,.02,0,.66,.31,.02,.86,0,.48,.12,0,.04,.59,0,.02,0,0,.26,0,0,0,.05,.26,.17,0,.26,0,.7,0,0,.55,.87,0,0,0,.02,.58,.49,0,.01,0,.09,0,.38,0,.23,0,0,0,0,.64,0,.04,.21,0,0,0,.98,0,0,.03,.94,.54,0,0,0,0,.03,.69,.08,.99,.01,0,.03,.74,0,.33,.02,0,.49,0,0,.02,.01,0,.49,.21,0,.02,.04,0,.01,.19,0,.21,0,.72,0,0,0,.48,.31,.82,.65,.46,.03,0,.08,0,.61,.2,.67,.01,0,0,0,0,0,.86,.88,0,.54,.02,.26,.04,0,.05,0,.04,0,.82,.78,.38,.08,0,.02,.41,0,0,0,0,.01,0,.08,0,.75,0,0,.03,0,0,.11,0,.43,0,0,.66,0,.99,.28,0,.13,.53,.01,.81,0,.87,.08,0,.87,.65,0,0,0,.38,0,0,0,0,0,0,.28,.01,.42,0,.54,0,.05,.22,.64,.09,0,0,0,.25,0,.03,.57,.02,0,0,0,.65,0,.46,.34,.46,.4,.22,0,.02,0,0,.37,.1,0,.81,.28,0,.92,0,.42,0,0,0,0,.41,.01,0,0,.31,.05,.16,0,0,.05,.17,0,.92,0,.66,.95,0,.32,0,0,.04,0,0,.04,0,0,.48,.02,.56,0,0,0,0,.42,0,0,0,.03,0,.01,0,0,0,.27,.6,.05,.9,0,0,0,.52,.09,1,.39,0,.01,.01,.86,0,0,0,0,0,0,0,.46,0,.09,.11,0,.99,.05,.94,0,0,0,0,.95,0,.03,0,.39,.12,.4,.26,.91,.88,0,0,.95,.24,0,.03,0,.11,.01,.9,.59,.51,.42,0,.67,.45,0,.95,0,0,0,0,.08,.68,0,.19,0,0,0,.01,.2,0,.54,0,.38,0,.45,.04,.23,.99,.01,.06,.48,.38,0,.16,.4,0,0,0,0,0,.01,0,.16,.02,.34,.15,.43,0,0,.33,0,0,0,.12,.01,0,0,.09,0,.39,.39,0,.35,.15,0,.01,.13,.83,0,0,.75,0,.58,.65,0,.04,.88,.2,0,.01,0,.47,.79,.23,.88,0,0,.98,.08,.96,.93,0,0,0,.02,0,0,0,0,0,.48,.8,.51,0,.98,0,.46,.13,.36,0,0,0,0,.21,0,0,.23,.85,.54,.13,.18,.1,.48,.6,0,0,.04,0,.58,.74,.25,.09,0,.78,.94,0,0,0,.55,0,0,0,0,0,0,.19,0,.19,.49,0,0,0,0,0,.17,0,.01,0,0,.15,0,0,0,0,0,0,0,.02,0,0,.21,.26,0,0,0,0,0,0,0,0,.35,0,0,.47,0,0,.87,0,0,0,0,.29,.94,0,0,0,.11,0,0,0,.76,.34,.28,.43,.15,.91,.01,.51,.02,0,.52,.58,.1];export{a as pvalData};
