const a=[0,0,0,.39,0,.96,.01,.41,.08,0,0,.33,.96,0,0,.99,.01,.72,.11,.81,.78,.02,.76,0,0,0,.03,.23,.01,.15,0,0,0,.07,.22,.18,0,0,.02,0,.56,0,0,.19,.44,0,.42,.15,.78,.09,.02,.76,0,0,0,0,0,.27,0,0,0,0,0,.41,.1,.33,0,0,.61,.6,.13,0,0,.28,0,.58,.21,0,0,.83,0,0,.59,0,.38,.02,0,.79,0,0,.13,.78,.21,0,.37,.24,0,.25,.22,0,.45,0,0,.26,0,.89,.11,.36,0,0,.67,0,.87,0,.45,0,.09,.14,0,0,.69,.47,0,.35,.79,0,0,.01,.43,0,.09,0,.45,.37,0,.3,.98,.11,.34,1,0,.23,0,0,.69,.14,.91,.95,0,.01,0,.55,.74,.84,.22,.35,.83,.71,.02,0,.51,0,.7,.1,.15,.02,0,.1,.34,0,.96,.43,.29,0,0,.37,.69,.44,.04,0,.24,.7,.51,0,0,.83,.28,.03,.03,.33,.32,.45,.16,0,0,0,0,0,.72,.02,.01,0,0,.85,0,0,.35,.03,.04,.17,.21,0,.84,0,.28,0,.69,.99,.35,.04,0,0,0,0,0,0,.44,.35,.01,.4,.12,.32,0,0,.11,.52,0,.18,.89,.45,0,0,.12,.27,.2,.06,.22,.55,.2,.73,.57,.07,0,.16,0,.29,.63,.01,.22,0,.37,.33,0,0,.62,0,.2,0,.39,0,.92,0,0,0,0,.73,.46,.03,0,.97,.25,.02,0,0,.13,0,.43,0,.54,.24,.27,.06,0,.26,.61,0,.06,.01,.99,.09,.88,0,.15,.21,.22,0,.7,0,.4,.1,0,.46,.12,.79,0,.13,.62,.15,0,.02,0,.72,0,0,.88,.16,0,.09,.9,.07,0,0,.17,.29,.02,.84,.5,0,.12,.01,0,0,.02,.99,0,0,.48,.07,0,.33,0,.01,.05,.19,0,0,.02,.82,0,0,0,.39,.36,.1,.18,0,.13,0,0,.23,.21,.01,.31,.25,0,.06,.01,0,.71,.07,.68,.98,.16,.23,.84,.03,.61,.97,0,0,0,.56,.43,.48,.25,0,0,.1,.16,.82,.49,.61,0,0,.05,.48,0,0,0,0,0,0,.03,0,.41,.77,0,0,.24,0,.65,0,.84,.47,.05,0,0,.77,.17,0,.04,.11,0,.31,.95,0,.01,0,0,0,0,0,0,.48,.03,0,0,0,.36,0,.02,0,0,.93,.11,.88,.1,0,.35,0,0,0,0,.01,.67,.67,0,.39,0,0,.55,0,0,.21,.1,0,0,.6,0,.03,0,0,0,.05,.05,.93,0,.02,0,0,.58,.3,0,.02,0,0,.95,.86,0,.18,.15,.15,0,0,0,.04,.39,0,0,0,0,.71,0,.43,.01,.31,.23,.76,.06,0,.83,0,.98,.39,0,.98,.06,0,.29,0,.66,.58,.06,.12,.73,.39,.18,0,.03,.15,.31,.07,.16,.77,.78,.03,.62,.68,0,.46,.28,0,0,0,0,.2,0,.17,.02,.15,0,.42,.24,.11,.81,.1,.31,.49,.1,.48,0,0,.54,0,0,0,.27,0,.07,.03,.69,.08,0,.37,0,0,0,0,.73,0,.34,.86,.83,0,.16,0,0,0,0,.43,0,0,0,.03,0,.04,.43,.07,.15,.94,.3,0,.86,.37,.09,.68,0,.11,.62,.66,.49,.34,.23,.88,.92,.37,.03,.03,0,0,.41,0,.01,.1,0,0,0,.34,.13,.01,.25,0,0,.48,0,0,.03,0,.24,0,.4,0,.73,0,0,.58,0,.91,.26,.84,0,0,0,.11,0,.08,.12,.59,0,0,.01,.54,.24,.05,0,.03,0,0,0,.14,.14,.07,0,0,.55,.03,0,0,0,.01,.27,.07,.84,.12,.84,0,0,.03,0,0,0,.86,0,0,.96,.91,.13,0,.39,.05,0,.2,.22,.92,.45,.61,.31,.07,.06,.5,.68,0,0,.86,0,0,0,0,.04,0,0,0,0,.94,0,.93,0,.28,.19,.48,0,0,0,.81,.61,0,.01,0,.87,0,.21,.68,.48,.01,0,.25,.4,0,0,.67,0,.13,0,.01,0,0,0,.11,.24,.22,.28,.38,0,.8,.05,0,.14,.32,0,.02,0,.23,.83,0,0,0,.01,.04,.93,.02,0,.49,0,0,0,.13,0,0,0,0,.08,.02,0,0,0,0,.01,.02,.03,.73,.88,.15,0,.01,0,.86,0,.69,.34,0,.66,.55,.08,0,.82,0,.45,.09,.27,.45,.57,0,.75,.14,.66,.53,.31,.7,.07,0,0,0,.44,.19,.02,0,.76,.18,0,.98,.76,.21,0,.24,.83,.09,.06,.2,.46,.39,0,0,.1,0,.14,.8,0,.41,.65,.02,0,.19,.49,.06,.92,.09,.06,.18,.53,.38,.18,0,.09,0,0,.83,.3,.02,0,.15,0,0,0,0,0,.79,0,.16,0,0,.26,.23,.75,.75,.94,0,.28,.65,.46,.29,.95,.75,.5,.06,0,0,.85,.47,.02,.73,.72,.51,0,0,0,0,.7,0,0,.02,.41,0,0,0,0,0,.01,.98,0,0,.44,.5,.25,0,.86,.4,.32,0,.27,.71,.14,.88,.87,.31,.89,0,0,.76,0,.91,0,.44,.57,.59,0,.23,.55,.99,0,.2,.86,.12,0,0,0,.4,.5,.26,.18,0,0,.03,.01,.97,.66,.11,.01,.16,.47,.01,0,.05,.27,.12,.27,.64,.36,.33,.61,.25,.95,.96,.05,.86,.54,.3,.37,.07,.05,.94,.54,0,.52,.79,.44,.02,0,0,.07,.45,0,.81,0,0,.3,.5,0,.65,.18,.94,.27,.76,.06,.07,.62,0,0,.28,0,.94,.19,0,.05,.51,.96,.1,.2,.02,.39,0,.91,0,0,.57,0,.11,0,.82,.91,0,.32,.68,.58,0,.03,.05,.19,.01,0,.56,.02,.06,0,0,.61,0,0,.34,0,0,.3,.01,.98,.75,.03,.3,.27,.01,.02,0,.75,0,0,.03,0,0,.07,.58,0,0,0,.01,.01,.01,0,.02,0,.34,0,.72,.4,0,.01,.99,.21,.06,.02,0,.52,0,.11,0,.21,.08,0,.42,.16,0,.14,.2,.28,0,0,.02,.32,0,0,.32,.39,.04,0,.72,.86,0,0,.88,0,0,0,.13,.34,0,.02,0,.18,.4,.8,.65,.46,.94,0,0,.55,.15,0,0,0,0,0,0,.76,.17,0,.14,0,.48,0,.46,0,.63,.24,.14,.35,.1,.01,.07,0,0,.56,0,.52,.03,0,.66,0,.93,.07,0,0,.01,.74,0,.4,0,.17,0,.04,0,0,.43,0,.45,.04,0,0,.23,.12,0,0,.42,.7,0,0,.88,.68,.04,.59,.1,.01,.14,.45,.01,0,.2,0,0,0,.58,.58,.79,0,0,0,.94,.74,.4,.89,.23,0,.83,0,.02,.78,.07,.44,.41,0,0,.04,0,0,0,.41,.03,.89,.01,.03,.13,.02,.94,0,.49,0,.12,.07,.02,0,.01,.1,.18,0,.86,0,.71,.22,.92,0,.03,.67,.31,.64,0,0,0,.11,.49,.3,0,0,0,0,0,.48,.52,.15,0,.01,.3,0,.91,0,0,0,.01,.32,.41,.17,0,0,.2,.22,.46,.01,0,.91,.55,0,0,0,.04,.86,0,.01,0,.94,.06,0,.77,.65,0,.01,.04,.01,0,.39,.68,.32,0,.7,.33,.01,.36,0,0,.47,.37,.45,.02,.44,.64,0,0,.36,.03,0,.17,0,.06,.72,.02,0,.68,.63,0,.27,.01,0,0,.04,0,.86,.01,.1,.88,.34,0,.36,.9,0,0,.96,0,.05,0,0,.04,.24,.48,0,0,.74,.63,.12,0,0,0,.88,.01,0,.16,0,0,.14,.91,.96,0,.83,.14,.1,.54,0,.96,.88,.04,.42,.24,0,.38,.4,0,.35,.1,0,0,0,0,.9,.03,0,.49,0,0,0,0,.37,.03,.87,.04,.8,.02,0,.01,.22,0,0,0,0,.78,.81,.82,.95,.85,.01,.13,0,0,.02,.5,.05,.01,.09,.07,0,.26,0,.1,0,0,0,.15,.95,0,.66,0,.06,0,0,.11,.14,0,0,0,0,.53,.81,0,.04,.35,.36,0,.68,.1,0,.03,0,0,0,.01,.22,0,0,.02,.62,0,.2,.08,0,.06,0,0,.17,.03,0,.01,.47,0,0,.62,.28,.1,.95,0,.29,0,0,1,.08,0,0,0,0,.23,0,0,0,0,.14,.56,0,.32,0,.85,0,0,.56,.02,0,0,0,0,.1,.41,0,0,0,.45,0,0,0,.42,0,0,0,0,.62,0,.98,.11,0,0,.02,.7,0,0,0,.03,.02,0,0,0,0,.3,.06,.31,.25,.9,0,.41,.09,0,.54,0,0,.05,0,0,.26,.89,0,.09,0,0,.08,.19,0,0,0,0,.01,0,.25,0,.05,0,.63,.81,1,.21,.65,0,0,.46,0,.14,0,.51,.58,0,0,0,0,0,.87,.84,.6,.03,.01,.63,.11,0,0,0,.17,0,.87,.8,0,.47,0,.17,.31,0,0,0,0,.76,0,0,0,0,0,0,.01,0,0,.22,0,.33,0,0,.88,0,.21,.38,.01,.07,.16,0,.02,.11,.86,.45,.63,.51,.82,0,0,0,.36,0,0,0,0,0,0,.54,.11,.77,0,1,0,.07,.01,.01,.14,0,0,0,.05,0,0,.17,.01,.71,0,0,0,.01,.56,.87,.38,.89,.04,0,0,0,.04,0,.02,0,.97,.38,.01,.68,0,.3,0,0,0,0,.44,0,0,0,.15,.04,.39,0,0,.07,.81,0,.7,.05,.45,.75,.02,.49,0,0,.14,0,0,.02,0,0,.02,0,.69,0,0,0,0,.44,0,0,0,0,0,.05,0,0,0,0,0,0,.13,0,0,0,.16,.48,.58,.52,0,.66,0,.66,0,0,0,0,0,0,0,.85,0,.54,.05,0,.5,.15,.98,0,0,0,0,.04,0,0,0,.11,.42,.2,.53,.65,1,0,0,.77,.09,0,.08,0,.01,.42,.69,.51,.15,.12,0,.57,.51,0,.02,.02,0,0,0,.03,.86,0,.1,.45,0,0,.01,.15,0,.62,0,.86,0,.91,0,.01,.72,0,.24,0,.74,0,.01,.05,0,0,0,0,.03,.64,0,.01,0,.25,.66,.02,0,0,.61,0,0,.01,0,.49,0,0,.33,.22,.03,0,0,.93,0,0,.01,.71,.36,0,0,.86,0,.52,.42,0,.51,.52,.18,0,0,0,.14,.35,.17,.51,0,0,.23,.61,.02,.99,0,0,0,.63,0,0,0,0,0,.72,.73,0,0,.84,.05,.73,.25,.13,0,0,0,0,.38,.03,0,.59,.06,.53,.78,0,.18,.8,.27,0,0,0,0,0,.84,0,.17,.01,.87,.41,.18,0,0,.53,.03,0,.02,0,.01,0,0,0,.02,.5,0,0,0,0,0,.03,0,.09,0,0,.94,0,0,0,0,0,0,0,.78,0,0,0,.21,0,0,0,0,0,0,0,0,.19,0,0,.57,0,0,.67,0,0,0,0,.33,.91,.55,.34,0,.76,0,0,0,.27,.27,.15,.22,.69,.12,.02,.4,.76,0,.55,.25,0];export{a as pvalData};
