const a=[.01,.01,0,.39,0,.08,.01,0,0,0,0,.65,.69,0,0,.83,.02,.37,0,.78,.17,0,.07,.09,0,0,0,.08,.02,0,0,0,0,.02,.56,.15,0,0,0,0,.75,0,0,.66,.23,.11,.36,.14,0,0,.06,.81,.24,0,0,0,0,0,.2,0,0,0,0,.55,.66,0,0,.01,.14,.39,.65,0,0,.01,0,.68,.02,0,0,.03,0,0,.53,0,.03,0,0,.27,0,0,0,.45,0,0,.8,.38,0,.01,.17,0,.39,0,0,.47,0,.33,.03,.03,0,0,.64,0,.4,0,.04,0,.55,0,0,0,.58,0,0,.27,.39,0,0,.06,0,0,.02,.04,.6,0,.16,.07,0,0,0,.94,0,.21,0,0,.38,.93,.99,.82,0,.18,0,0,.72,.44,.01,0,.08,.65,.16,0,.01,0,.39,0,0,0,0,0,.11,0,.44,0,.01,.83,0,0,.61,0,0,0,.53,.36,.03,0,0,.33,.41,.09,0,.1,.43,0,.65,0,0,0,0,0,.8,0,.06,0,0,.84,0,0,.85,0,0,.4,.03,0,.31,0,0,0,.9,0,0,0,0,0,0,0,0,0,0,0,0,0,.96,.8,0,0,.7,.23,0,.92,.22,.65,0,0,.05,.01,0,.35,.35,.01,.41,.64,0,0,0,.01,0,.41,.22,0,.07,0,.45,.11,0,0,.3,0,.03,0,.05,0,.01,.01,0,0,0,.89,0,0,0,0,0,0,0,0,0,0,0,0,.01,0,.08,0,0,.27,.01,0,.03,0,.06,0,.45,0,0,.16,.13,0,.32,0,.01,.08,0,.63,.05,.49,.03,0,.03,0,0,0,0,.31,0,0,.13,0,0,.06,.64,0,0,0,.01,.14,0,.33,0,0,.66,0,0,0,.06,.11,0,0,.35,0,0,0,0,.36,.01,0,0,0,0,.38,0,0,0,.04,0,.01,.73,0,.14,0,0,.07,.02,.02,.01,.24,0,0,.22,0,.96,0,.39,.61,.66,.22,.6,0,.18,.62,0,0,0,.46,.17,.16,.3,0,0,.13,.2,.4,.01,.02,0,0,0,.52,0,0,0,0,0,0,.54,0,.02,.56,0,0,0,0,.06,0,0,.72,.06,0,0,.49,0,.55,.12,.51,0,.2,0,0,.1,0,0,0,0,0,0,.56,0,0,0,0,.74,0,0,0,0,.24,.5,.24,0,0,.01,0,0,0,0,0,.55,.11,0,.39,0,0,.12,0,0,.76,0,0,0,0,0,0,0,0,0,0,0,.03,0,.22,0,0,.55,.69,.07,.34,0,0,.16,.15,0,.06,0,.57,0,0,0,.65,.39,0,0,0,0,.12,0,.02,0,0,0,0,0,0,.12,0,.16,.82,0,.76,.12,0,.97,0,0,.16,.59,.15,.53,.01,0,0,.59,.6,.23,0,.1,0,.05,.24,.03,0,0,.98,0,0,0,0,0,.15,0,.58,0,.28,0,0,.03,.04,.53,.12,.85,.76,0,.2,0,0,.03,.2,0,0,.11,0,0,.22,.02,.1,0,0,0,0,0,0,0,0,.21,.44,.39,0,.03,0,0,0,0,0,0,0,0,0,0,0,0,.01,.28,.36,.38,0,.52,0,.17,.86,0,.32,.1,.54,.11,.87,0,.93,.01,.04,0,0,0,.89,.18,0,0,0,0,0,0,0,.5,0,.01,0,0,.2,.09,0,.69,0,.91,0,.26,0,0,0,0,.19,.03,.09,.09,.83,0,0,0,0,.08,.3,.82,.01,0,0,0,.65,.13,0,0,.43,0,0,0,.11,.9,.61,0,0,.01,0,0,0,0,.39,.51,.04,.71,.08,.48,.13,0,.01,0,0,0,0,0,0,.18,.3,.07,0,.95,0,0,.08,0,0,.81,.14,.6,.16,.02,.19,0,0,0,.53,0,0,0,0,.01,0,0,0,0,.88,0,0,0,.28,.15,.9,0,0,0,0,.43,0,0,0,.24,0,.2,.06,.02,0,0,.04,.15,.44,0,.21,.01,0,0,0,.92,0,0,.11,.02,.1,.47,0,0,.29,0,0,0,.01,0,0,0,.06,.53,0,0,0,0,0,.18,0,0,.15,0,.04,0,0,0,0,.01,0,.86,.02,0,0,0,0,0,0,0,.39,.63,.42,0,0,0,0,0,0,.21,0,.8,.09,.06,0,.57,0,.12,0,.95,.52,.56,0,.01,.13,1,0,.05,0,.02,0,0,0,.64,.01,0,0,.21,0,0,.5,.48,0,0,.17,.91,.01,0,.01,0,.11,0,0,.12,0,.95,.1,0,.11,.01,.26,.18,.17,.32,0,.03,0,.44,0,.22,.04,0,0,.09,0,0,.21,0,.01,0,.39,0,0,0,0,0,.88,0,.04,0,0,0,.02,.39,.96,.99,0,.58,0,.97,0,.59,0,0,.99,0,0,.87,.01,.14,.75,.03,.06,0,0,0,0,.2,0,0,0,0,0,0,0,0,0,0,.29,0,0,.31,.49,.03,0,.16,.09,.01,0,.78,.67,.03,.43,.08,.11,0,.15,0,.56,0,.01,0,.56,.57,.7,0,.43,.56,.02,0,.19,0,.49,.02,0,0,.88,.67,0,0,0,0,.07,0,0,0,.04,.96,.39,.5,0,0,.23,0,.33,.17,0,.96,.42,.08,.42,.79,.2,.38,.19,.04,.35,.13,0,.1,.78,.06,0,0,0,.11,.21,0,.07,.71,.63,0,.39,0,0,.82,0,0,.91,.28,.47,.02,.38,.01,0,.92,0,0,.02,.01,.64,.12,0,0,.94,.53,0,.89,0,.01,0,0,0,.01,0,0,.01,0,.13,.01,0,0,.62,.13,0,0,0,0,0,0,.31,0,0,0,0,.45,0,0,.1,0,0,.39,0,.85,.53,0,.02,.1,.01,0,0,.29,.2,0,0,0,0,.06,.02,0,0,.64,0,.55,0,0,0,0,.27,0,.44,.02,0,0,.44,0,0,.14,0,0,0,.03,0,.01,.23,0,.68,.57,.02,0,.06,.03,0,0,.01,.2,0,0,.19,.13,.92,0,.37,.87,0,0,.43,0,.1,0,.05,.34,.02,0,0,.86,0,.56,0,.02,.87,0,0,.2,0,0,0,0,0,0,0,.02,.22,0,0,0,.43,0,.24,0,.37,.01,.12,.99,.74,0,.28,0,0,.09,0,.58,.16,.03,.8,0,.94,.03,0,0,0,.03,0,.59,0,0,0,.9,0,0,0,0,.88,0,.83,0,0,.13,0,0,0,.73,0,0,.44,.26,0,.87,0,0,.02,0,.26,0,.34,0,0,0,.47,.68,.45,0,0,0,.4,.32,.76,.32,.06,0,.23,0,.66,.72,0,.22,.89,0,0,.11,0,0,0,.62,.6,0,0,0,0,0,.95,0,.33,0,.89,0,.61,0,0,.36,.38,0,.37,0,0,.09,.74,0,.98,.58,.23,.4,0,0,0,.96,0,.21,0,0,0,0,0,.53,.11,.8,0,0,.12,0,.01,0,0,0,0,.67,.11,0,0,0,.22,0,.41,0,.16,0,.17,0,0,0,0,.06,0,1,0,.37,.15,.5,.41,.25,0,0,.09,0,.02,0,.46,.91,0,.23,.16,0,0,0,0,.1,0,0,0,.02,0,0,0,.5,.7,.1,.03,0,0,.61,0,0,.02,0,0,0,.5,.21,.15,0,.05,.07,.98,.4,.4,.01,0,.5,.57,0,0,0,0,0,0,0,.25,.01,.4,0,0,0,.29,.51,0,0,0,.23,0,0,.78,0,0,.01,.07,.18,0,.05,.02,0,.81,.01,.14,.79,0,.35,.79,0,.08,.1,0,.3,.01,0,0,0,0,.73,.09,0,.44,0,0,.57,0,.55,.06,.54,.09,.91,0,0,.53,.5,0,0,0,0,.01,.01,.77,.33,.04,.01,0,0,0,0,.97,.01,0,0,.01,.01,0,0,.3,0,0,0,.3,0,0,.59,0,.12,0,0,.93,1,0,.97,0,0,.06,.44,0,.63,.83,.09,0,.93,0,0,0,0,0,0,0,.09,0,0,.25,.3,0,.59,.17,0,.57,0,0,0,0,0,0,.13,.01,0,.99,.05,0,.48,0,0,0,0,.37,0,0,0,0,0,0,0,0,0,0,.66,0,0,.71,0,.31,0,0,.47,0,0,.03,0,0,.13,.01,0,0,0,0,0,0,0,.86,0,0,0,0,.2,0,0,0,0,0,.52,.7,0,0,0,0,0,.15,0,0,0,.05,0,0,.06,0,0,0,.1,0,.22,0,0,0,0,0,.11,.03,0,0,0,0,.12,.71,0,0,0,0,0,0,.09,0,.01,0,.29,.03,1,.25,.98,0,0,.05,0,.04,0,.72,0,0,0,0,0,0,.33,.32,.14,0,0,.83,.13,0,0,0,.22,0,.42,.16,0,0,0,.05,.37,0,0,0,0,.06,0,0,0,0,0,0,.29,.46,0,.02,0,.11,0,0,1,0,.01,0,0,0,.08,0,0,.06,.36,0,0,.38,.67,0,0,0,.04,0,0,0,0,0,0,.64,.97,.3,0,.92,0,.35,0,0,0,0,0,.03,.03,0,0,0,0,.03,0,0,0,.01,.19,.6,.17,.01,0,0,0,0,.27,0,0,0,.37,.09,.08,.85,0,.14,0,0,0,0,.94,0,0,0,0,.21,.3,0,0,.17,.02,0,.05,.38,.29,.53,.14,.77,0,0,.27,0,0,.13,0,.73,0,0,.31,0,0,0,0,.88,0,0,0,0,0,.02,0,0,0,0,0,0,.16,0,0,0,.01,0,.15,.07,0,0,0,.66,0,0,0,0,0,0,0,.99,0,.99,0,0,0,.36,0,0,0,0,0,0,0,0,0,.26,.79,.37,.79,.37,.41,0,.88,0,.34,0,.1,0,.41,.01,.16,.51,.01,.17,0,.74,0,0,0,.04,0,.74,.52,.11,.7,0,.28,0,0,0,0,.46,0,.77,0,.5,0,0,0,0,.96,0,.1,0,.89,0,.01,.4,0,0,0,0,.01,.02,0,0,0,.1,.23,.62,0,0,.57,0,0,.01,0,.15,0,0,0,.04,0,0,0,.28,0,0,.09,.66,.51,0,.06,.94,0,0,.66,0,.35,.86,.15,0,0,0,.01,.99,.27,.48,0,0,.56,.8,0,.49,0,0,0,.03,0,0,0,0,0,.29,.04,0,0,0,.67,.4,.09,.3,0,0,.81,0,.02,0,0,.58,0,.21,.32,0,.06,.15,.98,0,0,0,0,0,.76,0,.01,.58,.13,.05,.87,0,0,0,.57,0,0,0,.06,0,0,0,0,.63,0,0,0,0,0,.35,0,0,0,0,0,0,0,0,0,0,0,0,.07,0,.88,0,.05,0,0,0,0,0,.89,0,0,0,0,0,.26,0,.07,.97,0,0,0,0,0,.86,0,.01,0,0,0,0,0,.51,0,.36,.02,.12,.18,0,.81,.02,0,.12,.88,0];export{a as pvalData};
