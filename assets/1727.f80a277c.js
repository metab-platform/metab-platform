const a=[.74,.63,.19,.04,.04,.03,.41,0,0,.01,0,.17,.45,.02,0,.83,.02,.38,.15,.33,.99,0,.32,0,0,0,0,.18,.56,0,0,.03,0,.47,.42,.68,.01,0,.47,.62,.67,.01,0,.58,.61,0,.63,.04,.64,0,0,.34,.78,0,.01,0,0,.24,.25,.01,0,.02,0,.96,.4,0,0,0,.79,.95,.69,.32,0,.04,.12,1,.38,0,.26,.55,.14,.03,.56,.02,.14,0,0,.15,.05,.01,.08,.8,0,0,.11,.57,.07,.15,.19,0,.19,0,.13,.57,.01,.67,0,.07,0,.13,.3,0,.82,.1,.99,.29,.28,0,.3,0,.61,.15,0,.58,.78,0,.2,.28,0,0,0,.01,.42,0,.47,.12,0,.71,.03,.44,0,.88,0,0,.33,.23,.38,.22,0,.44,0,0,.75,0,0,.02,.08,1,.96,0,.14,.06,.55,.05,0,0,.09,.08,.08,0,.5,.18,0,.23,.08,.09,.24,0,0,.01,.94,.85,.93,.22,.05,.38,.4,.34,0,.79,.85,0,.66,0,0,0,.07,.01,.65,0,0,0,0,.17,.41,.01,.96,0,0,.13,0,0,.72,0,.34,.01,.73,0,.07,.06,.08,.12,.14,0,0,0,0,.09,.02,.2,.39,.22,0,.7,.83,.21,.03,0,.74,.31,0,.01,0,.04,0,0,.7,.06,.11,.77,.01,0,.01,.08,0,.44,.43,0,.94,.32,.91,.93,0,0,.41,.02,.26,0,.01,0,.05,.77,0,.12,.09,.09,.01,0,0,.45,0,0,0,.01,.17,0,.01,0,.67,.02,0,.01,0,0,0,.01,0,.26,0,.19,.02,.17,.06,.45,.85,.02,.81,0,.89,0,0,.66,.11,.45,.75,.24,.71,.06,.32,.36,.01,.63,0,0,.25,.18,0,0,.33,.23,.32,.01,.9,.4,0,.21,0,.02,0,.6,0,.12,.15,.75,0,.1,.46,.01,0,.02,0,.37,.11,.18,.91,0,.48,.41,.03,.78,0,.21,.53,.08,.8,.03,.31,0,0,.68,.01,.13,0,.02,0,0,.17,.01,.66,.05,.52,.98,.74,.32,.54,.48,.72,.24,.01,.01,0,.27,.96,.01,0,.13,.01,.09,0,.75,.01,.62,.02,0,.01,.88,0,.01,0,.19,.23,.1,.02,0,.28,.84,0,.65,0,.72,.04,0,.03,.77,0,.01,.05,.08,.11,.36,0,.08,0,.17,.03,.09,0,0,0,0,.02,0,0,.02,0,0,.26,0,0,0,0,0,0,.77,.91,.68,.01,0,.05,0,.1,0,.06,0,.71,.07,.03,.05,.01,0,.15,0,.03,.53,.01,0,0,0,.01,0,0,0,.54,0,.01,.89,.01,.85,.92,.66,.37,.29,.02,.1,.04,0,.92,.58,0,.01,0,0,.02,.08,0,.8,.3,0,.16,0,0,.5,0,.44,0,0,.01,0,0,.02,.1,.05,.21,.91,.96,1,.33,.95,.22,0,0,.88,.78,.09,.38,.1,.11,.01,.4,.53,.33,.11,.24,0,.11,.3,.73,0,.17,.16,0,0,.01,.74,0,.57,0,.06,.23,.59,.47,0,.98,0,.85,.33,.27,.75,0,.39,.5,.39,0,.12,.21,.15,.55,.09,.04,.53,.18,.13,.01,.61,0,0,.03,.24,.06,.02,.88,.03,.44,.13,0,0,0,.44,0,0,0,.03,.29,0,.71,0,.01,.15,.52,0,.5,.03,.61,0,.14,.18,.07,0,.2,.4,.01,.24,0,.42,.42,.22,0,.2,.01,0,.5,.62,.79,0,.04,0,0,0,0,0,.14,0,.03,.22,.18,0,.55,.02,.16,0,.09,0,0,0,0,.09,.07,.51,.14,.03,.17,.02,0,.1,.06,.29,.15,.95,0,0,0,.69,.21,0,.05,.28,0,.02,.02,.46,.32,.25,.54,.03,0,.01,.05,0,0,0,.73,.14,.45,.25,.35,.01,.06,.1,.16,.53,.03,0,0,.04,.2,.92,.44,.45,.47,0,0,.01,.27,0,.22,.66,0,.23,.84,.37,0,.02,.01,.39,.02,.99,.64,0,.25,.65,.09,0,.01,.35,0,0,0,.93,.29,.92,0,0,.07,0,.9,.62,0,.01,.22,0,.76,.74,.04,.17,.11,0,.46,.17,0,.53,.93,.01,0,.01,.43,.01,0,.23,.74,.14,.23,.89,0,.14,.01,.58,0,0,.01,.01,.5,.87,.89,0,.58,.05,.14,0,.41,.03,0,.86,.17,0,0,.07,.02,0,.32,.19,0,.54,0,0,.01,0,0,.03,.27,.84,.95,.03,.02,0,.01,0,.02,.13,.31,.02,.61,0,0,.02,.81,0,.96,0,.09,.69,.16,0,.87,.02,.53,.01,.9,0,.42,0,0,0,.44,0,.3,.04,.24,.05,0,.73,.11,0,0,.34,.92,.25,.1,.26,0,.46,0,0,.57,.16,.49,.56,.01,.11,.01,0,.41,.04,.78,.01,.2,.26,.43,0,.43,.16,0,0,.11,.01,.01,.14,0,0,.01,0,.01,.02,.38,0,.1,.26,.25,.13,.25,0,0,.09,.4,.39,.67,0,.49,0,.88,.03,.82,0,.1,.81,.22,0,.75,.01,0,.37,.04,.81,.73,.01,0,.12,.19,.09,.29,.11,0,.45,.15,.01,.02,.01,0,.04,0,.01,.88,.66,.27,0,.44,.21,0,0,.46,.87,0,.08,.75,.8,0,.07,0,0,.01,0,0,.14,0,.23,.11,.09,.75,0,.27,.7,0,.95,.01,.01,.17,0,.29,.89,0,0,0,0,0,0,0,0,.27,.18,.32,0,0,0,0,0,.52,.18,.85,.22,.76,.73,.86,.36,.69,.26,.61,.68,.5,.83,.05,.8,.14,0,0,0,.01,.63,0,.71,.33,.65,0,.33,.14,.01,.25,.57,0,.03,.37,.33,.03,.61,.04,.34,.76,0,0,0,.08,.46,.01,.05,0,.02,.38,.02,.64,.9,.23,.11,0,0,.84,0,0,.03,0,.27,.45,0,0,.64,0,0,0,.18,.05,0,.13,.03,.04,.06,0,.68,.21,0,.01,.03,0,.01,.52,.04,.58,.5,0,0,.36,.39,0,0,.09,.01,0,.02,.66,.02,0,.98,0,0,0,.01,.6,0,.59,0,0,.15,0,.45,.03,0,0,.6,0,0,.5,0,.05,0,.18,.02,.23,.57,.52,.62,.9,.22,.3,.06,.32,0,.01,.37,.09,.17,0,.95,.06,.35,0,.69,.03,0,0,.4,0,.09,.13,.01,.8,.14,.03,.33,.39,.32,.53,.01,.19,.34,0,0,.09,0,0,.15,0,.14,.16,0,.64,.37,.01,.37,0,.94,0,.99,.01,.96,0,.75,.18,.76,.03,.32,.05,0,.14,.84,.05,0,0,.71,0,.07,.99,0,0,0,.14,0,.25,0,.48,0,.88,.51,.04,0,.03,.01,.01,.39,.03,.55,.08,.03,.69,.18,.12,0,0,.4,.44,.05,.89,0,.96,.59,0,.33,0,.53,.22,0,0,.83,.97,.45,0,.01,.11,.68,.42,.67,.74,.89,0,.25,0,.68,.05,.13,.43,0,.01,0,0,.02,.03,.12,0,.02,0,.02,0,.02,0,.81,.02,.65,0,.23,.93,0,.36,.68,0,.92,0,.12,0,0,0,.87,.06,.98,.51,.2,.29,0,0,0,.49,.08,.97,.04,0,0,0,0,0,.18,.58,.07,0,.65,0,.09,.4,.24,.11,.46,.54,.22,.01,0,.01,.85,.15,.45,.11,.26,.31,.78,.24,.02,.63,0,.64,0,.58,.04,.01,.73,0,.93,.47,0,0,.4,.24,0,0,.58,.97,0,.98,.21,0,0,0,0,.45,0,.23,0,.78,0,0,0,.45,0,.22,0,0,0,.55,.11,.5,0,0,0,.12,0,0,.96,.08,0,.98,0,0,.28,0,0,.51,.53,0,0,.07,0,.04,0,0,.23,0,.18,.02,.21,0,.54,.28,.29,0,0,.6,0,.01,.52,0,.1,.08,.31,.17,0,.37,.1,0,.31,0,.29,.19,0,0,.5,.02,.26,.9,0,.09,.01,0,.01,0,0,.78,.61,0,.37,.01,.24,.01,0,.93,0,.59,.06,.94,0,.52,.03,.29,0,0,0,.26,.33,.14,.75,.22,.38,.01,.01,0,0,.5,.17,.59,.01,.03,.15,.01,0,0,.5,0,0,0,.07,.03,.01,.8,.04,.01,0,0,0,.99,.04,.05,0,0,.44,.18,.01,.87,.43,.29,0,.23,0,0,.01,.01,0,.01,.01,.32,0,0,.52,.15,0,.42,.74,.04,.62,0,0,.24,.01,0,.04,.36,.98,0,.32,.97,0,.7,0,0,0,0,.38,.13,0,0,.05,0,.02,.06,0,.01,0,.22,.22,0,.49,0,0,0,.02,.75,.04,0,.69,.03,.01,.31,.03,.08,.01,.39,0,0,0,0,.68,.03,.11,0,0,.29,0,0,0,0,0,.53,.57,0,.67,0,0,0,.3,.13,0,0,.49,.23,0,0,0,.23,0,.13,0,.22,.1,.23,0,.01,.1,.55,0,.28,0,0,.26,.15,.05,0,0,.01,0,0,0,.04,0,.24,0,.29,.94,.95,.28,.82,.84,.33,.2,0,.93,0,.89,.01,0,0,.01,0,0,.77,0,0,0,0,.73,.82,0,0,0,.46,.1,.74,.32,.01,0,.01,.84,.91,.01,.25,0,.04,.05,.81,0,0,0,.01,0,.95,0,0,.25,.02,.57,.4,0,.18,.02,.02,0,0,0,.74,0,0,0,.13,.04,.05,.17,.63,.02,.01,0,.52,.01,0,0,0,.01,.04,.7,.15,.98,0,.29,.05,.49,0,.01,.1,.03,.33,.59,.92,0,.15,.01,0,.36,.08,0,0,.38,.4,.94,.3,0,.52,.14,0,0,.1,0,0,0,.21,.25,.23,.66,0,.6,.51,.27,.04,.26,.9,0,0,0,0,.58,.44,.01,.13,.03,0,.02,.06,.88,.08,.34,.86,.45,.05,.01,.19,0,.17,.15,.19,0,0,.01,.97,0,.09,0,.95,0,0,.23,0,0,.03,.26,0,.06,0,0,0,.01,.16,0,.24,0,.47,.03,.18,.34,0,0,0,.11,0,.01,0,.95,.07,.04,.02,.51,.07,.49,.01,0,.14,.57,.21,0,0,0,.16,.1,.67,.02,.35,.38,.94,.43,.47,.45,.25,0,.4,0,0,0,.16,0,0,.24,.11,.33,.43,.21,0,.87,.13,0,.09,.34,.01,0,.72,.05,.59,0,.5,.16,.01,0,0,0,.02,.61,.01,.48,0,0,0,0,.11,0,.42,.08,.25,0,.27,.06,.01,0,0,.01,.02,.01,0,0,.16,.17,.55,.43,.02,.19,.83,0,.01,.83,.02,.81,0,0,.01,.02,0,0,0,.03,.26,0,0,.76,.62,.06,.77,.28,.01,.17,.11,0,0,.47,.03,0,0,.06,.3,.4,.26,.43,.06,0,.62,.53,.03,.2,0,0,.66,.28,.74,.36,.01,0,0,.22,.23,.01,.01,.19,.89,.82,.01,.72,0,0,0,0,.24,.09,.3,.08,0,.44,.08,0,.63,.01,.84,.08,.11,0,.01,0,.92,0,.51,.53,0,.89,.13,0,0,0,.01,.01,.09,.85,.09,.04,.02,0,.18,.73,0,0,0,.01,.01,.42,0,.56,.03,.2,0,.1,.91,0,0,0,.01,.06,.17,0,.5,.07,.01,0,0,0,.05,.01,.07,0,.06,0,0,0,.39,.14,0,.54,.02,.25,.01,0,.06,.05,0,0,.01,.49,0,0,.04,.06,.03,.32,0,.16,.01,0,.06,.01,.01,.15,.2,0];export{a as pvalData};
