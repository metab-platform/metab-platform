const a=[0,0,0,.38,0,.53,.06,.01,.36,0,0,.47,1,0,0,.68,0,.74,.02,.29,.57,.12,.41,0,0,0,.63,.07,0,.97,0,.13,0,.19,.06,.21,0,0,.02,0,1,0,0,.42,.37,0,.51,.17,.34,.62,.2,.76,0,0,0,0,0,.79,.08,0,.01,0,0,.66,.03,.85,0,0,.46,.4,.73,0,.19,.2,0,.31,.29,.03,0,.33,0,0,.06,0,.22,.24,0,.71,0,0,.79,.46,.88,0,.29,.08,0,.38,.06,.01,.38,0,0,.22,0,.45,.74,.65,0,0,.71,.13,.46,0,.37,0,.14,.4,.01,0,.25,.61,0,.02,.35,0,0,0,.98,0,0,0,.05,.86,0,.04,.28,.45,.87,.56,0,.6,0,0,.94,.13,.96,.16,0,.03,0,.05,.69,.61,0,.62,.81,.64,.12,0,.17,0,.62,.56,.88,.15,0,.63,.1,0,.79,.92,.02,0,0,.93,.42,.41,.64,0,.62,.36,.52,0,0,.2,.12,.05,.55,.07,.15,.34,.27,0,0,0,0,.03,.86,.1,.05,0,0,.92,0,0,.64,.65,.32,.21,0,0,.81,0,.75,0,.57,.1,.83,.06,0,.01,0,0,0,0,.01,.89,.06,.31,.5,.24,0,0,.03,.62,0,.03,.39,.45,.17,0,0,0,.67,0,.14,.44,.05,.72,.31,.28,0,.81,0,.73,.08,.02,.91,0,.15,.46,.03,0,.06,0,.57,0,.35,0,.76,0,0,0,0,.53,.05,.29,0,.5,.96,.2,0,0,.97,0,.63,0,.72,.54,.01,.3,0,.01,.16,0,0,.01,.73,.16,.73,0,.51,.1,.1,0,.22,0,.18,0,0,.47,.06,.86,.08,.19,.37,.78,0,0,0,.55,0,0,.06,.78,0,.01,.67,.99,0,0,.09,.24,.24,.49,.61,0,.07,.08,0,0,.02,.55,0,0,.3,.97,0,.5,0,0,.17,.76,0,0,.03,.49,0,0,0,.13,.61,.3,.47,0,.63,0,0,.25,.02,.05,.45,.01,.02,.69,.02,0,.71,.95,.37,.78,.27,.16,.66,0,.84,.91,0,0,0,.36,.06,.95,.88,0,0,.14,.01,.23,.39,.19,0,.01,.57,.24,0,0,0,0,0,0,0,0,.93,.8,0,0,.97,0,.64,0,.85,.78,.27,0,0,.54,.5,0,0,0,0,.31,.11,0,0,0,0,0,0,0,0,.64,.07,0,0,0,.2,0,.03,.02,0,.24,.11,.32,.36,0,.2,0,0,0,0,.21,.95,.6,0,.64,0,0,.69,0,0,.2,.62,0,0,.67,0,.28,0,0,0,.47,.11,.34,0,0,0,0,.53,.52,0,.02,0,0,.09,.3,0,0,.93,.03,0,0,0,.02,.92,0,0,.01,0,.08,0,.78,.06,.35,.43,.06,.53,0,.55,0,.55,.18,0,.77,.02,0,.47,0,.23,.07,.05,0,.63,.56,.65,0,0,.06,.18,.63,.19,.24,.67,.06,1,.15,0,.76,.9,0,0,0,0,.17,0,.01,0,.28,0,.91,.91,0,.17,.07,.17,.41,.34,1,0,0,.43,0,0,0,.13,0,.3,.02,.67,.02,0,.83,0,0,0,0,.58,0,.08,.3,.91,0,0,0,0,0,.02,.46,0,0,0,.58,0,.73,.64,.04,.02,.82,.37,0,.34,.38,.09,.42,0,0,.81,.4,.1,.11,.17,.27,.1,.41,.08,.81,0,0,.17,0,.01,.76,0,0,0,.01,0,.22,.98,0,0,.09,.01,0,0,0,.63,0,.61,0,.31,0,0,.45,0,.83,.03,.53,0,0,0,.68,.07,.69,.43,.24,0,0,.01,.31,.77,.7,0,0,0,0,0,.13,.28,0,0,0,.07,.05,0,0,0,0,.45,.01,.02,.06,.7,0,0,.35,0,0,0,.07,.03,0,1,.79,.24,0,.64,.79,0,.01,.14,.94,.18,.18,.1,.45,.08,.09,.08,0,0,.7,0,0,.01,.12,.03,0,0,.3,0,.31,.03,.16,0,.11,.03,.42,0,0,0,.36,.25,0,.04,0,.19,0,.26,.58,.54,.09,0,.15,.19,0,0,.64,0,.35,0,.09,0,0,0,.12,.41,.92,0,.19,0,.71,.84,0,.96,.01,0,.36,0,.9,.73,0,0,0,.04,.21,.89,.71,.01,.08,0,0,0,.73,0,0,0,0,.02,.02,0,0,0,0,.05,.06,.4,.89,.87,.17,0,.01,0,.01,0,.8,.22,0,.37,.61,0,0,.65,0,.28,.24,.59,.61,.11,0,.14,.12,.94,.72,1,.96,.05,.14,0,0,.25,0,.43,0,.54,.69,0,.41,.07,.94,0,.33,.55,.08,.51,.78,.47,.67,0,0,.1,0,0,.02,0,.58,.31,0,0,.2,.42,.82,.02,.79,.03,.88,.34,.42,.94,0,.26,0,0,.36,.53,.14,0,0,0,0,0,.02,0,.97,0,.07,0,0,.04,.32,.47,.78,.82,0,.16,.39,.55,.08,.34,.44,.78,.02,0,.1,.65,.09,0,.77,.01,.59,0,0,0,0,.81,0,0,.7,.31,0,0,0,0,0,.38,.56,0,0,.45,.82,.62,0,.17,.13,.01,0,.3,.06,0,.54,.12,.14,.24,.02,0,.99,0,.65,0,.24,.02,.29,0,.27,.65,.94,0,.05,.74,0,0,0,0,.26,.01,.99,.96,0,0,0,.02,.12,.8,0,0,.32,.38,.32,0,0,.41,0,.16,.22,.49,.51,.38,.15,.68,.63,.25,.77,.21,.03,.53,.01,.25,.83,.33,0,.93,.97,.03,.08,.01,0,0,.38,0,.37,0,0,.05,.77,0,.66,.08,.84,.03,.52,0,.97,.38,0,0,.01,0,.51,.03,0,.22,.14,.36,.62,.55,.02,.46,0,.46,0,0,.74,.01,.03,.02,.51,.11,0,.89,1,.77,0,.46,.36,.88,.05,0,.15,.36,.6,.02,0,.29,0,0,0,0,0,.77,.15,.56,.75,.15,.21,.5,.01,.16,0,.72,0,0,.12,0,0,0,.33,0,0,0,.01,0,.03,0,.01,0,.93,0,.37,.32,.15,.09,.84,.27,.42,.03,0,.82,0,.07,0,.21,.08,.01,.87,.21,0,.85,.49,.01,0,0,.02,.68,0,0,.01,.85,0,0,.43,.76,0,0,.81,0,0,0,.01,.38,0,.29,0,.18,.36,.87,.05,.14,.95,0,0,.14,.91,0,0,0,0,0,0,.08,.02,0,1,0,.03,0,.19,0,.31,0,.08,.83,0,0,.48,0,0,.52,0,.68,0,0,.77,0,.8,.02,0,0,.01,.66,0,.84,0,.76,0,0,0,0,.01,0,.07,.02,0,0,.35,.16,0,0,.79,.2,0,.01,.74,.95,.32,.63,.55,.62,.88,.99,0,0,.36,0,0,0,.72,.72,.91,0,0,0,.33,.98,.45,.92,.01,0,.74,0,.1,.14,.69,.13,.26,0,.01,0,0,0,0,.23,0,.46,.19,.38,.61,.53,.74,0,.42,0,0,.03,0,0,.01,0,.25,0,.25,0,.13,.32,.96,0,.3,.68,.6,.07,0,0,0,0,.25,.09,0,0,0,0,0,.48,.52,.14,0,.18,.01,0,.85,.12,0,0,0,.05,.1,.2,0,0,.66,.23,.01,.01,0,.14,.02,0,0,0,.29,.71,0,0,.01,.79,.04,0,.82,.36,0,.11,.01,0,0,.22,.76,.07,0,.74,.2,.15,.57,0,0,.8,.84,.38,.43,.44,.11,0,0,.33,0,0,.07,0,.91,.87,.07,0,.76,.75,0,.75,.02,0,0,.04,0,.31,0,0,.51,.28,0,.1,.39,0,0,.78,0,.71,.01,0,.01,0,.14,0,.01,.19,.68,0,0,0,0,.84,.18,.01,.17,0,0,.35,.35,.73,0,.9,.67,.07,.64,0,.55,.48,.33,.43,.68,0,.25,.67,0,.18,.71,0,.23,0,0,.98,.05,.16,.6,.02,0,0,0,.91,0,.64,.04,.78,0,0,0,.1,0,0,0,0,.26,.98,.83,.54,.49,.01,.59,.01,0,0,.17,0,0,.97,.04,0,.75,0,.14,0,0,.01,.34,.39,0,.26,0,0,0,.04,.14,.48,.01,0,0,.02,.58,.84,0,.42,.63,.34,0,.44,.19,0,.41,0,0,0,.12,.94,0,0,0,.45,.06,.09,.04,0,.03,0,0,.91,.34,.03,.01,.58,.01,0,.58,.03,.81,.02,0,.69,.23,0,.4,.9,0,0,0,0,.89,0,0,0,.1,.01,.56,0,.05,0,.31,0,0,.73,.56,0,0,0,0,.26,.31,0,0,.05,.38,0,.01,0,.2,0,0,0,0,.78,0,.13,.35,0,0,0,.87,0,0,0,.52,.05,0,0,0,0,.64,.3,.64,.52,.04,0,.5,.22,0,.9,0,0,.51,0,0,.08,.35,0,.65,.03,0,.07,.2,0,0,.08,0,.27,0,.22,0,.01,0,.68,.24,.85,.07,.97,.07,0,.2,0,.03,.01,.78,.46,0,0,0,0,0,.04,.78,.01,.18,.04,1,.05,0,0,0,.74,0,.02,.64,.01,.17,0,.01,.12,0,0,0,0,.47,0,.01,0,.06,0,0,.01,0,0,.14,0,.2,0,0,.34,0,.11,.71,0,.24,.43,0,.34,0,.83,.84,.32,.63,.65,0,0,0,.06,0,0,0,0,0,0,.31,.02,.35,0,.61,0,.07,.07,.01,.97,0,0,0,.04,0,0,.83,.02,.21,0,0,.05,0,.76,.63,.67,.51,.3,0,0,0,0,.03,.22,0,.83,.94,.04,.95,0,.34,0,0,0,0,.34,0,0,0,.95,.03,.28,0,0,.21,.09,0,.77,0,.7,.32,0,.54,0,0,.15,0,0,0,0,0,.46,0,.33,0,0,0,0,.15,0,0,0,0,0,.05,0,0,0,0,.15,.01,.65,0,0,0,.61,.97,.66,.78,0,.3,0,.95,0,0,0,0,0,0,0,.83,0,.51,.05,0,.75,.14,.53,0,0,0,.01,.75,0,.04,0,.03,.76,.6,.45,.95,.54,0,0,.96,.02,0,.11,0,0,.08,.81,.93,.05,.05,0,.63,.53,0,.62,.01,0,0,0,.03,.66,0,.13,.02,0,0,0,.04,0,.16,0,.45,0,.34,.03,.21,.96,0,.55,0,.74,0,0,.25,0,0,0,0,.07,.34,0,.12,0,.44,.18,.14,0,0,.89,0,0,0,.02,.33,0,0,.95,0,.45,.01,.01,.84,0,0,.01,.46,.94,0,0,.84,0,.69,.73,0,.54,.57,.19,0,0,0,.6,.56,.04,.86,0,0,.31,.63,.46,.27,0,0,0,.28,0,0,0,0,0,.68,.55,.01,0,.47,.01,.87,.05,.1,0,0,0,0,.22,0,0,.04,1,.44,.64,.01,.07,.23,.41,0,0,0,0,.01,.56,.05,.03,0,.74,.04,.01,0,0,.68,.12,0,.07,0,0,0,.04,0,.42,.57,0,0,0,0,0,.01,0,.02,0,0,.09,0,0,0,0,0,0,0,.24,0,0,.04,.98,0,0,0,0,0,0,0,0,.19,0,0,.97,0,0,.89,0,0,0,0,.59,.93,.15,0,0,.35,0,0,0,.03,.59,.55,.85,.75,.35,.02,.66,.32,0,.94,.7,0];export{a as pvalData};
