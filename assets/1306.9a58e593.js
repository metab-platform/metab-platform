const a=[0,0,0,.16,0,.04,.43,0,.01,.02,0,.96,.89,0,0,.45,.01,.8,.39,.29,.49,.14,.49,0,0,0,.03,.29,.93,0,.08,.35,0,.16,.01,.63,0,0,.27,0,.62,0,.01,.45,.6,0,.04,.42,0,.21,.01,.33,0,0,.56,0,0,.01,.28,0,.14,0,0,.23,.02,.01,0,0,.61,.91,.81,0,.07,.7,0,.65,.58,.06,0,.09,0,0,.79,0,.24,.15,0,.12,0,0,0,.81,.55,0,.04,.02,0,.95,.01,.12,.36,0,.56,.08,.53,.59,.63,.06,0,.03,.8,.42,.44,0,.94,0,.54,.1,.02,0,.54,.2,.02,.17,.55,.19,0,0,.17,0,0,0,.33,.03,0,.24,0,.74,.01,.2,0,.43,.01,0,.22,.65,.69,0,0,.51,0,.38,.69,.87,0,0,.82,.74,.75,0,0,.02,.51,.12,.83,.03,.04,.08,0,0,.23,.3,0,0,0,0,.72,0,0,0,.21,.69,.32,0,.66,.17,.06,.84,.01,.09,.14,.01,.06,.03,0,0,.05,.04,.64,.88,0,0,0,.29,0,.31,.49,.04,.02,.26,0,0,.84,0,.02,.12,.7,.02,.01,.09,.13,.63,.77,0,.05,0,0,.05,.69,.33,.62,.06,0,0,0,.37,0,0,.01,.34,.08,0,0,0,.46,.01,.18,.64,.1,.35,0,.8,.46,.29,0,.46,.43,.01,.7,0,.03,0,.03,0,0,.77,.66,0,.01,0,.09,.01,0,0,0,.65,0,.03,0,0,0,.01,0,0,.1,0,0,0,.04,.15,.19,.02,0,.07,.06,.01,0,.04,.98,.44,.39,0,.2,.66,.92,.05,.96,.26,0,0,0,.17,.25,.19,.33,.38,.22,0,0,.56,0,.5,0,0,.02,.02,0,.01,.61,.09,0,.02,.96,.74,.65,.58,.02,.98,.63,.78,.84,0,.04,.92,0,0,.61,0,.01,.05,0,0,.86,.04,.04,0,.81,.29,0,0,0,.29,.01,.11,.6,0,.37,0,.05,.9,0,.05,0,0,.08,.13,.11,0,.38,0,.21,.75,.26,.2,.99,.19,.94,.75,0,0,0,.72,.3,.88,.55,0,.73,.28,.01,.75,.47,.01,0,.01,.03,.37,0,0,0,.01,0,0,0,0,.1,.92,0,0,0,.01,.51,0,.14,.96,.03,0,0,.96,.02,0,0,0,0,.95,0,0,.6,0,0,.01,.01,0,0,.18,.59,.95,0,0,.58,.33,.08,.94,0,.01,.33,0,.05,0,0,0,0,0,0,.01,.74,.35,0,.81,0,0,.01,0,0,.09,0,0,0,.54,0,.01,.01,0,0,.58,.99,.02,.38,0,.01,0,.1,.94,.57,0,0,0,.04,.31,0,0,.01,.01,0,0,0,0,0,0,0,.09,0,.01,0,.01,.59,.81,.07,.01,0,0,.89,0,.28,.37,.45,.36,.23,.15,.19,0,.01,.03,.07,0,.15,.14,.06,.01,0,.17,.02,0,.66,0,.59,.01,.01,0,0,.02,.01,0,0,0,0,.89,.07,0,.51,.56,0,.04,.62,0,.96,.15,.15,.34,.05,.82,0,0,0,0,0,0,.22,.15,.04,.24,.48,.1,0,.01,.45,0,0,.06,.34,0,.54,.59,.48,0,0,0,0,0,.5,.57,0,0,0,.59,0,.02,0,.06,.15,.01,.53,0,.08,.01,.02,.57,0,.01,.04,.58,0,0,.04,.49,0,.45,.63,0,0,0,.72,.96,.44,0,.03,.19,0,0,0,.17,.03,0,.46,.36,0,0,0,0,.18,.51,.74,0,0,0,0,.71,0,.39,.03,.79,0,0,0,0,.12,.77,.25,.01,0,0,0,.92,.56,0,.85,0,0,0,0,.8,.81,0,0,0,0,.97,0,0,0,0,.3,.01,0,.35,.03,.22,.01,.4,0,0,0,.2,.28,0,.2,.47,.02,0,.4,.01,0,0,.78,.69,.1,.49,.89,.89,.99,.16,.15,0,0,.9,0,0,.24,.57,.15,0,0,.89,0,.11,1,0,0,.37,.99,.04,0,0,.56,0,.78,0,0,0,.13,.89,.39,.28,.44,.7,0,.1,.95,0,0,.73,.28,.07,0,.08,0,0,0,.04,.01,.2,0,0,0,.5,0,.03,.9,.06,0,0,0,.28,.9,0,0,.01,.38,.02,.69,.19,.84,0,.01,0,0,.1,0,0,0,.51,.97,.2,.18,0,0,.01,.07,.09,.01,.62,.64,0,0,.64,.01,0,0,.02,.73,0,.48,.12,0,0,.76,0,.48,.97,.48,.97,.01,0,0,.07,.24,.18,.34,.34,.39,.14,.22,0,.63,0,.31,0,.01,.07,.71,.13,.42,.04,.01,.92,.43,.57,0,0,.28,.33,.01,0,.4,.06,0,0,.26,.48,.01,0,0,.17,.73,0,0,0,.64,.27,.98,.28,0,0,.27,0,0,.5,0,.03,0,.01,0,0,0,.14,0,.82,0,.05,0,0,.37,.55,.68,.66,.18,0,.14,0,.98,0,.05,0,.27,0,0,.3,.13,0,0,.44,0,.63,.01,0,0,0,.3,0,0,0,.01,0,0,0,0,0,.1,.8,.01,0,.23,.48,.01,0,.01,.17,.07,0,.14,.03,0,.76,.02,.48,0,.01,0,0,0,.33,0,.13,.05,.63,0,.35,.36,.63,0,.35,.05,0,0,0,0,.53,.24,.02,0,0,0,0,.38,.04,.46,0,0,.72,.87,.5,.78,0,0,0,.75,0,.21,.69,.96,.17,.34,.19,.5,.1,.86,0,.89,.85,.16,.66,.07,.27,0,0,0,.01,.07,0,0,.14,0,.19,0,.68,.08,.02,0,.54,.49,.86,0,.97,.12,.18,.82,.27,0,0,0,.69,0,0,.04,.04,.33,0,.63,.15,.95,0,0,0,.19,.31,.01,.81,.16,.24,0,0,0,.83,.49,0,.01,.27,.08,0,0,.35,.16,.13,.21,0,.6,0,0,0,.07,0,.56,.58,.87,.41,.02,.01,.92,.09,.13,0,.53,0,0,.76,0,.01,0,.04,0,0,0,.58,0,0,0,.01,0,.75,0,.65,.83,.14,.05,.92,.76,.53,.04,0,.05,0,.07,0,.85,.18,.23,.93,.75,0,0,.75,0,0,0,.25,.62,0,0,0,.2,0,0,.19,.33,.38,0,.13,0,0,0,.91,.77,0,.02,0,.09,0,.22,0,.4,.27,0,.01,.07,.01,0,.73,0,0,0,.3,.02,.17,0,.05,.05,.06,0,.63,0,.47,0,.49,.61,0,.02,.88,0,0,.41,0,.06,.02,0,.87,0,.95,.02,0,0,0,.58,.03,.71,0,.06,0,0,0,0,0,0,.43,.32,0,0,0,.58,0,0,0,0,0,0,.13,.21,.01,.95,0,0,0,0,0,0,.6,0,0,0,.49,.67,.14,0,0,0,.15,.22,.27,.61,.19,0,.33,0,.41,.02,0,.2,.29,.47,.33,0,0,0,0,.65,0,0,.71,.06,.06,.4,.99,0,.86,0,0,.31,0,.01,.03,0,.18,.13,.01,0,.01,.03,.34,0,.03,.34,.98,.11,0,0,.14,0,0,.51,0,0,.05,0,.03,.43,.59,.26,0,.02,0,0,.07,.78,0,0,.37,.02,.26,.16,0,0,.29,.39,0,.15,.01,0,0,0,0,0,.02,.21,0,0,.46,.01,.6,0,.69,.72,0,.22,.06,.84,0,.01,.55,.02,.44,.99,0,.07,.25,.01,0,.45,.65,.01,.1,0,0,.01,0,.67,.13,0,.1,0,.03,.49,.55,0,.55,.89,0,.23,.76,0,0,.2,0,.35,.01,.02,.83,.09,0,0,.78,.75,0,.05,.01,.03,.31,0,0,0,.09,0,.03,0,.24,0,0,0,0,.99,.12,.67,0,0,0,.82,.02,0,0,.13,.47,.72,.38,0,.98,.77,.12,.28,.14,0,.74,.57,0,.86,.31,0,.02,0,0,.13,.07,.29,.93,.18,0,0,0,.55,0,.74,.16,.5,0,0,0,.12,0,0,0,0,0,.12,.64,.94,0,.01,.25,.75,0,.84,.02,0,0,0,.75,0,.01,0,.32,.01,.01,.87,.09,.01,0,.11,.09,0,0,.32,.7,.48,.27,0,0,.83,.19,.06,.34,.61,.89,.54,0,.52,.75,0,0,0,.45,0,.74,.01,0,0,.01,.11,.26,.1,.32,0,.03,.08,0,0,.01,.97,.06,.05,.48,0,.1,.46,.07,0,0,.12,.07,0,.99,0,0,1,0,0,0,0,0,0,.03,0,.02,0,.08,0,.75,0,0,.52,0,0,0,0,.01,.25,.61,0,.01,.88,0,0,.44,0,.94,0,0,0,0,.28,0,0,.29,.28,0,0,.68,0,.01,0,.38,.55,0,0,0,0,.39,.05,.02,.14,0,0,.02,.19,0,.22,.16,.03,.37,0,0,.42,.79,0,.88,.74,0,.01,.6,0,.37,.06,.01,.94,0,.23,0,.19,.75,.23,.09,.9,.49,.43,.33,0,.22,0,.13,.6,.63,.05,0,0,0,0,0,0,.12,.03,.17,.01,.49,.04,0,.02,0,0,0,0,.7,.51,0,.16,0,.21,0,0,0,0,.11,0,.92,.07,.86,0,.42,0,0,0,.8,0,.39,0,0,.43,0,.54,.44,0,.24,.54,0,.2,0,.61,.46,.42,.85,.95,0,0,0,0,0,0,0,0,0,0,.17,.01,0,0,.92,.01,.55,.97,.63,.28,0,0,0,.81,0,.04,.35,.04,0,0,0,.07,.01,.35,.91,.53,.13,.15,0,.02,0,0,.74,.25,0,.25,.66,.01,.74,0,.5,0,0,0,0,.53,.01,0,0,0,.03,.94,0,0,.15,.08,0,.52,0,.9,.73,.14,.33,.03,.01,.03,0,0,0,0,0,.02,.67,.33,0,0,0,.01,0,0,.17,.05,.63,.1,.52,0,0,0,.95,.73,.91,.19,.01,0,0,0,0,.01,.08,0,.99,.95,.56,0,0,0,0,0,0,0,.43,0,.63,.35,0,0,.09,0,0,0,0,.72,0,0,.52,0,.13,.12,.91,.04,.18,.15,0,0,1,.16,0,.08,0,.38,0,.1,.89,.5,.08,0,.89,0,0,0,.71,0,.01,0,.9,.32,0,.12,0,0,.91,0,.43,0,0,0,.32,0,.13,.29,.03,.45,0,1,.66,.64,0,.27,.07,0,0,0,0,.01,.02,0,.12,.54,.82,.99,.39,0,0,.43,0,0,0,.42,.73,0,0,0,0,.56,.61,.04,.48,.48,0,0,.17,.6,0,.13,.04,0,0,.79,0,.11,.57,.06,0,.15,0,0,.21,0,.99,0,.12,.13,.29,0,.01,0,0,0,.05,0,0,0,0,0,.37,.67,.56,0,0,0,.74,.32,.52,0,0,0,0,.42,0,0,.01,.46,.65,.78,.32,.07,.07,.84,0,0,0,0,.71,.2,.82,0,0,.19,.91,.01,0,0,.22,.42,0,.37,0,0,0,.18,0,.14,.36,0,0,0,0,0,.06,0,.8,0,0,.05,.01,0,0,0,0,0,0,.24,0,0,.09,.93,0,0,0,0,0,0,0,0,.44,0,0,.21,0,0,.34,0,.02,0,0,.45,.48,0,0,0,.02,0,0,0,0,0,.91,.25,.57,.46,0,.01,.58,0,.24,.35,.29];export{a as pvalData};
