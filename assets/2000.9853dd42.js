const a=[0,0,0,.5,0,.09,.01,.83,0,.01,0,.22,.11,0,0,.12,.21,.29,.46,.53,.16,0,.47,0,0,0,0,.48,0,0,0,0,0,.11,.99,.85,0,0,0,0,.33,0,0,.27,.02,0,.1,0,.85,0,.02,0,.21,0,0,0,0,.12,.01,0,0,0,0,.33,.02,.01,0,0,.66,.71,.38,0,0,.06,0,.2,0,0,0,.17,0,0,.44,0,.29,.16,0,.06,0,0,.57,.11,0,0,.77,.01,0,0,.92,0,.4,0,0,.2,0,0,.41,.79,0,0,.1,0,.6,0,.32,0,.8,0,0,0,.61,.78,.39,.69,.93,0,0,.02,.01,0,.9,0,.49,.1,.79,.13,.53,0,0,.01,0,.04,0,0,0,.02,.3,.58,0,.2,0,.68,.75,.26,.58,.7,.45,0,0,0,.94,0,.27,0,0,0,0,0,.97,0,0,.02,.88,.34,0,.08,.9,.23,.01,0,.68,.9,.3,0,0,.02,.13,.05,.21,.01,.2,.15,0,0,0,0,0,.38,.02,.01,.03,0,0,.02,0,0,.77,0,.01,.05,.81,0,.02,0,.09,0,.85,.18,.06,.07,0,0,0,0,0,0,.84,.01,.02,.01,.56,.38,0,0,0,.02,0,.18,.52,.86,0,0,.5,.69,.01,.25,.31,.6,.9,.14,.4,.44,0,0,0,.15,.09,0,.81,0,.81,.59,0,0,.33,0,.08,0,.06,0,.05,0,0,0,0,.02,.69,.03,0,.77,.03,.02,0,0,0,0,.77,0,.69,.17,.72,0,0,.73,.15,0,.01,0,.29,.2,.99,0,.05,.43,.97,0,.76,0,.44,.05,0,.47,.21,0,.04,.24,.9,.17,0,.02,0,.43,0,0,1,0,0,.12,.52,0,0,0,.01,.01,0,.3,.05,0,.37,.01,0,0,.34,.23,0,0,.12,.02,0,0,0,0,.3,0,0,0,0,.14,0,0,0,.22,0,.62,.53,0,.33,0,0,.31,.36,.02,0,.35,.02,.02,0,0,.59,.48,.64,.67,.63,.48,.86,0,.1,.89,0,0,0,0,.55,.64,.46,0,0,.06,.18,.22,.48,.03,0,0,.02,.23,0,0,0,0,0,0,.24,0,.7,.27,0,0,.03,.48,.06,0,.08,.04,0,0,0,.06,.01,.04,.4,.36,0,.06,.99,0,.06,0,0,0,0,0,0,.4,.07,0,0,0,.53,0,0,0,0,.12,.48,.54,.11,0,.63,0,0,0,0,0,.17,.24,0,.5,0,0,.65,0,.36,.02,.12,0,0,.27,0,.03,0,0,0,0,.06,.19,0,.02,0,0,.46,.27,.46,.02,0,0,.67,.97,0,.68,.02,.3,0,0,0,.24,.61,0,0,0,0,.28,0,.07,.14,.21,.36,.31,.01,0,.27,0,.25,.91,0,0,.83,.37,.94,0,.03,.86,.46,.16,.01,.03,.08,0,.18,.72,.89,.04,0,.71,.55,.77,.18,.62,0,.12,.07,0,0,0,0,.06,0,.95,.01,.62,0,.07,0,.89,.59,.59,.55,.62,.79,.7,0,0,.03,.04,0,0,.65,0,0,.05,.2,.24,0,.1,0,0,0,0,.12,0,.75,.95,.92,0,.36,0,0,0,.25,.53,0,0,0,.73,0,.01,.09,.02,.14,.35,.53,0,.18,.31,.3,.99,0,.26,.77,.01,.53,.76,.08,.44,.03,0,0,.3,0,.12,.26,0,.13,.02,0,0,0,.88,.12,.09,.47,0,0,.71,.02,0,.18,0,.04,0,0,0,.12,0,0,.46,0,.44,.4,.29,0,0,0,.82,.01,.18,.32,.04,0,0,0,.44,.49,0,0,.21,0,0,0,.81,.52,.4,0,0,.76,.88,0,0,0,.24,.04,.27,.64,.03,.01,.2,.75,.76,0,0,0,.03,0,0,.4,.71,0,.01,.01,0,0,.93,.61,.27,.53,.35,.08,.3,.34,.31,.22,0,0,.73,0,0,.05,.01,0,0,0,.05,0,.65,0,.32,0,.55,.32,.28,0,0,0,.3,.6,0,0,0,.06,0,0,.77,.08,.05,0,.02,.87,.09,0,.78,.04,0,0,.02,0,0,0,.11,.92,.3,.47,.66,0,.01,.08,0,.08,.65,0,.05,0,.9,.02,0,0,0,0,.01,.58,.43,.01,.2,0,0,0,0,0,0,.06,0,.08,.33,.01,0,0,0,0,0,.42,.56,.57,.02,0,.01,0,.31,0,.58,.1,0,.01,.1,.68,0,.19,0,.01,.79,.55,.06,.59,0,.48,.85,.19,.26,.09,.01,.32,0,0,0,0,.48,.01,0,.54,.02,0,.2,.4,.01,0,.89,.3,0,.77,.08,.03,.17,0,0,.9,0,.35,.78,0,.01,0,.54,.14,.98,.37,.09,.88,.38,.03,.09,.04,.04,.02,0,.01,0,0,.91,.19,0,0,.94,0,.03,0,0,0,.17,0,.72,0,0,.1,.11,.77,.49,0,0,.44,.07,.02,.62,0,.3,.1,.75,0,0,.02,.62,.62,.58,.9,.46,.04,0,0,0,.01,0,0,.2,.21,0,0,0,0,0,0,.87,0,0,0,.73,.49,0,.48,.34,.32,0,.44,.21,.43,.6,.01,.66,.24,0,0,.44,0,.33,0,.48,.87,.88,0,.41,.67,.94,0,.15,.8,0,0,0,0,.44,.72,.04,.01,0,0,.71,.02,.07,.14,.1,.09,.03,0,.16,0,.36,.02,.61,.48,.2,.73,.59,.39,.25,.72,.35,.81,.27,.65,.88,0,.17,.63,.01,.63,0,.04,.58,.38,.27,0,0,.21,.71,0,.15,.01,0,.53,0,0,.24,.01,.29,.43,.36,.26,0,.32,0,0,.35,0,.77,.57,0,.68,.38,.02,.1,.79,0,.29,0,.94,0,0,.39,0,0,0,.98,.91,0,.38,0,.51,0,.02,.06,0,0,0,.61,0,.35,.1,0,.96,0,0,.76,0,0,.01,.04,.99,.94,.05,.41,.24,1,.01,0,.53,.35,0,.03,0,0,.6,0,0,0,.15,.01,0,0,0,0,0,.26,0,.33,.03,0,0,.41,.16,1,.81,0,.09,0,.01,0,0,.01,.05,.21,.14,0,.86,.02,.94,0,0,.41,.87,0,0,.89,.03,.24,0,.08,.17,0,0,0,0,.09,0,.18,.17,0,.44,0,.11,.18,0,.38,.25,0,0,0,0,.03,0,.01,0,0,0,0,.6,.03,0,0,0,.15,0,.82,0,.62,.8,.81,.99,.08,0,.02,0,0,.41,0,.22,.35,0,.17,0,.01,.09,0,0,0,.29,0,0,0,0,0,.09,0,0,.64,0,.05,.17,.07,0,.05,.15,0,0,.91,.43,0,0,0,0,.7,.04,.12,.18,.79,.06,.03,0,.17,0,0,0,.2,.04,0,0,0,0,.16,0,.54,0,.01,0,.01,0,.31,.06,.88,.55,.6,0,.07,.61,0,0,0,.43,.41,.96,.11,0,.01,0,0,0,.5,0,.07,.27,.13,0,0,.48,.2,0,0,0,.18,0,0,0,.57,.1,.03,.29,0,0,0,.05,.01,.75,0,0,0,0,0,.8,.01,.2,0,.04,.8,0,.13,0,0,0,0,.04,.31,.01,0,0,.08,.02,.34,.36,.08,.59,0,0,0,0,.04,.74,0,.09,0,.32,.06,.07,.11,.78,0,0,.47,.31,0,.25,.09,.28,0,0,.15,.02,.04,0,0,0,.03,.05,0,.63,.31,0,0,0,.35,.01,.89,0,0,.15,0,0,.62,.01,0,0,.11,.01,0,.19,.01,.65,.16,.59,.82,.73,.05,0,.72,0,0,.42,0,.06,0,0,.2,.93,.66,0,.02,.31,.56,.41,0,0,0,.23,0,.01,.25,0,0,.53,.01,.87,0,.62,.08,.21,.3,0,.74,.21,.02,.43,.63,0,.46,.92,0,0,.4,0,.02,0,0,.51,0,.01,.04,0,0,.13,0,.01,.53,.21,.35,.91,.03,0,.13,.32,0,0,0,0,.32,.18,.35,.08,.46,.18,0,0,0,.18,.53,.12,.01,.03,0,0,.03,0,0,0,0,0,.88,.02,.01,.28,0,.72,0,0,.19,.7,0,.13,0,0,.25,.67,0,.9,.32,.31,0,.9,.19,0,0,.02,0,0,0,.03,0,0,0,.82,0,.63,0,0,.07,0,0,.27,.08,0,.56,.91,0,0,.01,.32,.03,.7,0,.01,0,0,.31,.36,0,0,0,0,.11,0,0,0,0,.71,.8,0,.49,0,.04,0,0,.01,.14,0,.08,0,0,.16,0,0,0,0,.24,0,.01,0,.71,0,0,0,0,.01,0,.23,.06,0,0,.04,.76,0,0,0,0,0,0,0,0,0,.54,.04,.02,0,.19,0,.09,.68,0,.29,0,0,0,0,0,.04,.73,0,0,0,0,.96,.31,0,.02,0,0,0,0,.04,0,.1,0,.67,.4,.49,.52,.78,0,0,.02,0,.72,0,.86,.37,0,0,0,0,0,.8,.76,.64,.02,.01,.92,.23,0,0,0,.8,0,.87,.85,0,.29,0,.67,.15,0,0,0,0,.89,0,0,0,0,0,0,.04,.01,0,.58,0,.05,0,0,.6,0,.33,.06,.01,.14,.32,0,.01,.61,.64,.14,.06,.73,.49,0,0,0,.55,0,0,0,0,0,0,.97,.14,.6,0,.67,0,.21,.03,.02,.12,0,0,0,.35,0,0,.04,0,.49,0,0,0,0,.56,.88,.11,.47,.21,0,0,0,.45,0,.01,0,0,.01,.04,.11,0,.06,0,0,0,0,.24,0,0,0,.01,.1,.35,0,0,.39,.13,0,.81,.01,.74,.95,.03,.22,0,0,.67,0,0,.1,0,.11,0,0,.66,0,0,0,0,.6,0,0,0,0,0,.27,0,0,0,0,0,0,.92,0,0,0,.86,.11,.63,.23,0,.28,0,.01,0,0,0,0,0,0,0,.91,0,.47,.01,0,.5,.32,.61,0,0,0,.01,.01,0,0,0,.05,.44,.84,.63,0,0,0,.01,.23,.15,0,.43,0,.02,.97,.21,.43,.17,.04,0,.92,.41,0,.01,.01,0,.02,.01,0,.9,0,.07,.91,0,0,.01,.58,0,.74,0,.7,0,.06,0,0,.87,0,.02,.2,0,0,.35,.05,0,0,0,0,.02,.53,0,0,0,.08,.36,.01,0,0,.12,0,0,0,.05,.54,0,0,.03,.8,0,0,0,.17,.05,0,0,.68,.16,0,.86,.89,0,.14,.39,0,.64,0,.09,0,0,0,.86,.5,.16,.4,0,0,0,.12,.17,.95,0,0,0,.4,0,0,0,0,0,0,.71,0,0,.03,.62,.03,.14,.07,0,0,.12,0,.15,.22,0,.74,0,.01,.1,0,0,.51,.13,0,0,0,0,0,.03,0,.13,.34,.72,.51,.36,0,0,.39,.13,0,0,0,.37,0,.01,0,.15,.11,0,0,0,0,0,.09,0,.71,0,0,.05,0,0,0,0,0,0,0,.35,0,.25,0,.24,0,0,0,0,0,.15,0,0,.07,0,0,0,0,0,.44,0,0,0,0,.1,.33,.46,.51,0,.26,0,0,0,1,.03,.77,0,.08,.1,0,.81,.11,0,.02,.04,0];export{a as pvalData};
