const a=[0,0,0,.64,0,.69,.01,.72,0,.04,0,.35,.96,0,0,.89,0,.49,.2,.88,.61,.01,.94,0,0,0,0,.69,0,.01,0,0,0,.27,.99,.22,0,0,0,0,.39,0,0,.77,.27,0,.4,.08,.87,.02,.02,1,.07,0,0,0,0,.21,0,0,0,0,0,.8,.04,.07,0,0,.86,.94,.4,0,0,.03,0,.58,.25,0,0,.38,0,0,.62,0,.03,0,0,.37,0,0,.1,.3,.01,0,.75,.53,0,0,.14,0,.79,0,0,.43,0,.29,.69,.62,0,0,.94,.01,.58,0,.06,0,.66,.03,0,0,.83,.21,.02,.55,.79,0,0,.22,.07,0,.44,0,.55,.77,.03,.27,.79,.01,.02,.64,0,.47,0,0,.9,.26,.77,.89,0,.21,0,.96,.88,.53,.72,.18,.09,.36,.01,0,.5,0,.8,.02,0,0,0,0,.91,0,.94,.06,.69,.07,0,.05,.75,.55,.02,0,.6,.58,.92,0,0,.59,.69,.9,.4,.01,.14,.14,.56,0,0,0,0,0,.94,0,0,0,0,.94,0,0,.5,0,.04,.84,.43,0,.08,0,.25,.03,.76,.35,.04,.03,0,0,0,0,0,0,.73,.02,.01,.02,.47,.37,0,0,.02,.57,0,.13,.59,.83,.01,0,.69,.3,.03,.07,.24,.13,.06,.81,.5,.29,0,.06,0,.6,.7,0,.36,0,.41,.22,0,0,.73,0,.11,0,.29,0,.17,0,0,0,0,.61,.67,0,0,.99,.1,.02,0,0,0,0,.07,0,.27,.08,.36,0,0,.21,.19,0,.1,0,.48,.24,.27,0,.01,.27,.9,0,.51,0,.11,.17,0,.53,.19,.85,.02,.27,.37,.15,0,.09,0,.08,0,0,.84,0,0,.47,.99,0,0,0,.16,.2,0,.5,.25,0,.06,0,0,0,.05,.96,0,0,.25,.01,0,.02,0,.01,.26,0,0,0,0,.42,0,0,0,.09,.01,.88,.2,0,.08,0,0,.21,.06,.03,0,.83,.01,.06,0,0,.8,.02,.27,.83,.61,.11,.88,.01,.16,.66,0,0,0,.71,.71,.09,.07,0,0,.1,.74,.81,.06,.01,0,0,.06,.74,0,0,0,0,0,0,.05,0,.49,.62,0,0,.06,.01,.5,0,.48,.69,0,0,0,.97,.01,0,.51,.47,0,.74,.9,0,.03,0,0,0,0,0,0,.13,.1,0,0,0,.03,0,0,0,0,.25,.33,.97,.04,0,.21,0,0,0,0,0,.16,.3,0,.32,0,0,.48,0,0,.52,.02,0,0,.26,0,.02,0,0,0,0,.09,.09,0,0,0,0,.42,.34,.65,.01,0,0,.84,.74,0,.08,.01,.99,0,0,0,.13,.45,0,0,0,0,.1,0,.9,.12,.05,.7,.38,0,0,.35,0,.82,.4,0,.73,.89,.01,.7,0,.11,.85,.21,.11,.72,.91,.03,.01,.26,.96,.93,.02,.85,.89,.23,.14,.6,.92,0,0,.05,0,0,0,0,.55,0,.22,0,.38,0,.24,0,.67,.86,.08,.31,.89,.33,.31,0,0,.02,.02,0,0,.29,0,.02,.01,.15,.18,0,.01,0,0,0,0,.33,0,.4,.63,.82,0,.91,0,0,0,0,.78,0,0,0,.08,0,.02,.43,.04,.37,.02,.67,0,.93,.17,.1,.99,0,.08,.82,.79,.52,.31,.13,.3,.22,0,0,.03,0,.01,.87,0,0,.01,.03,0,0,.44,.08,.01,.22,0,0,.83,0,0,.22,0,.68,0,.47,0,.62,0,0,.97,0,.55,.28,.57,0,0,0,.12,.01,.73,.21,.04,0,0,0,.98,.1,.01,0,.02,0,0,0,.4,.98,.7,0,0,.35,.07,0,0,0,.16,.26,.02,.75,.29,.68,.45,.09,.04,0,0,0,.1,0,0,.81,.52,.11,0,.14,.04,0,.14,.36,.68,.13,.76,.02,.96,.11,.29,.27,0,0,.27,0,0,0,0,0,0,0,.31,0,.75,0,.76,0,.33,.51,.21,0,0,0,.65,.72,0,0,0,.1,0,.02,.45,.04,0,0,.91,.52,0,0,.7,.04,0,0,0,0,0,0,.2,.92,.05,.26,.47,0,.55,.01,.01,.1,.96,0,0,0,.22,.09,0,0,0,0,.01,.61,.02,.01,.33,0,0,0,.01,0,0,.02,0,.23,.01,0,0,0,0,0,0,.02,.78,.82,.03,0,.01,0,.89,0,.72,.14,0,.86,0,.55,0,.99,0,.13,.14,.54,.56,.52,0,.55,.04,.73,.08,.75,.39,.14,0,0,0,.78,.47,0,0,.27,.07,0,.3,.87,.08,0,.53,.71,.01,.05,.09,.03,.24,0,0,.43,0,.9,.79,0,.64,.05,.21,.09,.69,.4,.01,.85,.05,0,.62,.18,.57,.04,0,.34,0,0,.52,.09,0,0,.47,0,0,0,0,0,.88,0,.05,0,0,.2,.24,.95,.42,.56,0,.03,.36,.83,.93,.58,.6,.02,.06,0,0,.32,.94,.12,.75,.98,.93,0,0,0,0,.81,0,0,.02,.21,0,0,0,0,0,0,.71,0,0,.81,.87,.41,0,.99,.86,.81,0,.54,.08,.82,.64,.03,.25,.52,0,0,.66,0,.53,0,.43,.86,.33,0,.17,.98,.18,0,.23,.47,.13,0,0,0,.32,.57,.04,.11,0,0,.39,.01,.27,.93,.74,.01,.63,.84,0,0,.04,.04,.12,.35,.14,.21,.58,.05,.32,.73,.96,.63,.39,.2,.24,.22,.11,.25,.63,.76,0,.11,.32,.97,.07,0,0,.51,.31,0,.68,0,0,.43,0,0,.44,.59,.97,.48,.38,.14,0,.54,0,0,.87,0,.76,.12,0,.2,.95,.13,.03,.7,.01,.04,0,.86,0,.03,.47,0,.01,0,.39,.9,0,.1,.49,.12,0,.01,0,.02,0,0,.61,.01,0,0,0,.78,0,0,.33,0,0,.86,0,.62,.85,0,.31,.14,.04,.01,0,.27,.07,0,0,0,0,.57,.01,0,0,.2,.01,.01,0,0,0,0,.79,0,.43,.52,0,0,.49,.04,.12,.16,0,.02,0,.02,0,.01,.72,0,.85,.35,0,.09,.46,.58,0,0,.02,.54,0,0,.97,.4,.54,0,.33,.7,0,0,.9,0,.03,0,.05,.87,.1,.01,0,.49,.1,.83,.52,.4,.66,0,0,.4,.05,0,.07,0,0,0,0,.93,.96,0,0,0,.06,0,.36,0,.4,.29,.27,.95,.12,0,.66,0,0,.04,0,.01,.04,0,.87,0,.42,.02,0,0,0,.17,0,.4,0,0,0,.16,0,0,.83,0,.45,.01,.05,0,.05,.51,0,0,.68,.18,0,0,.94,.93,.03,.56,.07,0,.15,.2,.02,0,.1,0,0,0,.53,.56,.83,0,0,0,.48,.88,.11,.49,.03,0,.72,0,.17,.91,.11,.41,.01,0,0,.36,0,0,0,.02,.14,.83,0,0,0,0,.7,0,.83,0,.03,.2,.02,0,0,.2,.31,0,.57,0,.05,0,.99,0,.28,.65,.51,.2,0,0,0,.07,.05,.35,0,0,0,0,0,.06,.17,.32,0,.01,.9,0,.1,0,0,0,0,.36,.87,.01,0,0,.47,0,.38,.22,0,.46,.6,0,0,0,.02,.67,0,.01,0,.03,.02,.02,.99,.75,0,0,.05,.65,0,.69,.86,.32,0,.14,.16,.01,.05,0,0,.06,.02,.22,0,.29,.7,0,0,.71,.11,0,.68,0,0,.07,0,0,.84,.54,0,.01,0,0,0,0,0,.76,.01,.08,.31,.17,.19,.16,.86,0,0,.26,0,0,0,0,.31,.3,.02,0,.02,.76,.36,.97,0,0,0,.01,0,0,.26,0,0,.13,.19,.86,0,.95,.6,.06,.95,0,.26,.51,.16,.11,.08,0,.38,.5,0,.05,.14,0,0,0,0,.92,.01,0,.45,0,0,0,0,.83,.27,.92,.87,.21,.09,0,.01,.42,0,0,0,0,.15,.28,.79,.2,.11,.01,.03,0,0,.02,.6,.23,.01,.01,.2,0,.21,0,0,0,0,0,.15,.16,0,.63,0,.26,0,0,.02,.48,0,.01,0,0,.58,.28,0,.28,.96,.37,0,.63,.97,0,0,.01,.01,0,0,.09,0,0,0,.08,0,.69,.06,0,.13,0,0,.03,0,0,.02,.29,0,0,.58,.08,.07,.47,0,.06,0,0,.31,.02,0,0,0,0,.06,0,0,0,0,.98,.12,0,.7,0,.02,0,0,.83,0,0,0,0,0,.15,.01,0,0,0,.67,0,.02,0,.72,0,0,0,0,.73,0,.47,.08,0,0,.01,.97,0,0,0,0,.06,0,0,0,0,.96,.06,.33,0,.44,0,.44,.19,0,.78,0,0,.01,0,0,.14,.28,0,0,0,0,.06,.12,0,.05,0,0,0,0,.43,0,.05,0,.15,.4,.87,.72,.54,0,0,.09,0,.34,0,.44,.71,0,0,0,0,0,.26,.01,.86,.15,0,.85,.1,0,0,0,.17,0,.41,.53,0,.31,0,.91,.43,0,0,0,0,.58,0,.01,0,0,0,0,0,0,0,.3,0,.73,0,0,.49,0,.24,.11,.01,.09,.02,0,.07,.6,.78,.19,.1,.3,.96,0,0,0,.38,0,0,0,0,0,0,.95,.33,.25,0,.28,0,.56,.1,.05,.42,0,0,0,.45,0,0,.26,0,.6,0,0,0,0,.09,.75,.16,.44,.08,0,0,0,.31,0,.15,0,.95,.19,.11,.43,0,.04,0,0,0,0,1,0,0,0,.06,.02,.75,0,0,.29,.21,0,.34,0,.49,.78,.06,.38,0,0,.09,0,0,.53,0,.01,0,0,.39,0,0,0,0,.86,0,0,0,0,0,0,0,0,0,0,0,0,.01,0,0,0,.09,.06,.4,.04,0,.73,0,.75,0,0,0,0,0,0,0,.45,0,.96,.01,0,.43,.54,.28,0,0,0,0,0,0,0,0,.17,.82,.34,.73,.93,.52,0,0,.65,.04,0,.13,0,0,.64,.17,.45,.05,.17,0,.7,.34,0,0,0,0,0,0,0,.62,0,.11,.68,0,0,.1,.02,0,.17,0,.89,0,.88,0,0,.36,0,.04,.42,.43,0,.2,.06,0,0,0,0,.01,.27,0,0,0,.26,.59,.05,0,0,.82,0,0,0,0,.39,0,0,.22,.41,.01,0,0,.45,.03,0,0,.8,.19,0,.01,.68,0,.25,.49,0,.07,.75,.2,0,0,0,.12,.71,.27,.92,0,.02,.5,.9,0,.68,0,0,0,.31,0,0,0,0,0,.54,.37,0,0,.3,.38,.6,.27,.22,0,0,.01,0,.17,.08,0,.25,.02,.81,.4,0,.02,.69,.58,0,0,0,0,0,.72,0,.24,0,.24,.95,.89,0,0,.03,0,0,0,0,0,0,0,0,0,.7,0,0,0,0,0,.71,0,.29,0,0,.19,0,0,0,0,0,0,0,.46,0,.06,0,.11,0,0,0,0,0,.04,0,0,.49,0,0,.83,0,0,.98,0,0,0,0,.09,.69,.86,.31,0,.27,0,0,0,.97,.09,.43,.08,.57,.44,0,.25,.44,0,.44,.15,0];export{a as pvalData};
