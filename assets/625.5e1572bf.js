const a=[.47,.55,.24,.69,.7,0,.1,0,.11,.14,.01,.25,1,.83,0,.84,.21,.34,.15,.47,.92,.03,.39,0,.66,.22,0,.08,.01,0,.05,.33,.96,.29,.17,.33,.01,0,.01,.93,.41,.48,.98,.93,.94,0,.93,.58,.02,0,.8,.99,.07,.61,0,0,.49,.07,.02,.68,0,.26,.11,.45,.34,0,.18,0,.93,.68,.49,.01,0,.22,.78,.08,.04,0,.11,.03,.58,.82,.77,.07,.24,.09,.12,.26,.88,.18,0,.16,0,.22,.65,0,.3,0,0,0,.56,.13,0,.27,0,.69,.01,.15,.33,0,.08,0,.04,.35,.01,.42,.66,0,.09,.66,.87,.3,.28,.18,.41,0,.75,0,0,.04,0,0,.5,0,0,.03,0,0,0,.06,.03,.07,0,.18,.26,.58,.85,0,0,.97,.2,.23,.78,.16,0,0,.52,.22,.03,0,0,0,.51,0,0,0,.72,0,0,.64,.67,0,0,0,.01,0,.11,0,0,.4,.33,.8,.9,.01,0,0,.03,.13,.03,.77,.86,0,.09,0,.01,.68,0,.24,.38,.81,0,.03,.09,.17,.85,0,.63,0,0,.02,0,0,.61,.04,.11,.32,.18,0,0,.03,0,0,0,.66,0,.07,0,0,0,0,.66,.51,.56,.39,.85,.43,.01,0,.01,.57,0,0,0,0,0,.06,.53,.99,.62,.6,0,.43,0,0,.08,.66,.44,.42,.12,.02,.16,0,.05,.05,0,0,.03,.01,.28,.33,.72,.23,.09,.31,.82,.08,0,0,.99,.03,0,0,0,.3,0,.16,0,.01,0,.67,0,0,.32,.22,0,.73,0,.26,.59,0,.54,.26,.25,.31,.41,.03,0,0,0,0,.65,.79,.53,.16,0,0,0,0,.33,.62,.03,.01,0,.07,0,0,.11,.01,.05,0,.71,0,0,.51,.04,.08,0,0,.44,.97,0,.98,.03,.64,.02,.85,.81,0,.96,0,0,0,.91,0,.03,0,0,.05,.29,.04,.39,.24,0,.54,.11,.95,.21,.08,0,.1,.17,.23,.78,0,.03,0,.45,.02,.12,0,.56,.14,.8,.26,.28,0,.01,.4,.08,.21,.7,.18,.55,.5,.19,.27,.02,.69,0,.44,.26,0,.98,.08,0,.97,.01,.2,0,0,.52,.33,0,.5,0,.17,.02,.84,0,.37,.18,.55,.04,.89,.9,.13,.3,.65,0,0,0,0,.7,.99,0,.04,.27,.1,.56,.03,0,.17,.02,.02,.85,0,.15,.04,.52,.01,.21,0,.51,0,.97,0,.24,.1,0,.73,.7,.07,.58,0,.99,0,.32,.75,.01,.43,.03,.01,.26,0,0,.42,.49,.84,.54,0,0,.01,.19,0,.79,0,0,.02,.55,.4,.72,.27,.04,.03,.7,.36,0,.13,.66,0,0,0,.02,.91,.56,.12,0,.04,.84,0,.02,0,.24,0,.9,.33,.23,0,0,.14,.13,.78,0,.12,0,.31,.84,.15,.99,.1,0,0,.73,0,.95,.77,0,.08,0,.22,.39,0,.16,.07,.07,.22,.05,.08,.88,0,0,.06,.3,.04,.98,.42,.07,0,0,.87,.24,.01,0,0,.17,.89,.25,.1,.01,.38,.52,.28,.01,.15,.27,.08,.77,.58,0,.77,.01,.81,0,0,0,.01,.19,.04,.01,.01,.49,.89,.63,.15,0,.58,.56,.18,.01,.66,.9,.43,.64,0,.24,0,0,.07,.05,.01,.64,0,0,0,.09,.89,.39,.06,0,.49,0,.02,0,.45,0,.37,.42,0,0,.07,.78,0,.96,0,0,0,.37,0,.03,.38,.02,.4,.1,.36,.77,0,0,.17,.02,0,.14,.08,0,.54,.45,.36,0,.01,.23,.57,.29,.37,.63,0,.93,.26,.74,0,.02,.81,.1,.77,.22,0,0,0,0,.58,.75,.9,.39,0,.3,.71,0,.55,.41,.17,.15,0,.32,.14,0,.29,.62,.06,.09,.46,.45,.69,.04,0,0,.29,.05,.05,.75,.91,.23,0,.31,0,.32,.02,.04,.75,.01,.01,.19,.81,0,0,.01,1,.94,.73,.96,0,.1,.23,.12,0,.23,.52,0,0,0,.34,.12,.29,.21,.6,.59,.01,.6,.59,.13,0,0,0,.06,.05,.69,.05,.26,.48,0,.01,.13,.57,.45,0,.47,.05,.12,.01,.06,.02,.04,.31,0,0,.92,.25,0,.16,0,.04,.96,0,.48,.06,.15,.06,.39,0,0,0,0,.05,.41,0,0,0,.4,0,.4,.03,.01,0,.1,.85,.12,.18,.02,0,.27,.44,0,.86,.12,.58,.19,.88,0,0,.32,.01,.36,.51,.02,.98,0,.57,.55,.08,.16,.01,.21,.1,0,.07,0,.03,.08,.96,.05,0,.8,.04,0,.63,.07,0,0,.62,.03,.01,0,.05,.28,0,.07,.61,.49,0,0,0,0,.17,0,.22,0,.72,0,0,.15,.42,0,0,0,.62,.41,0,0,0,.09,0,.64,.54,0,.18,.29,.23,.01,.51,0,0,.06,.05,.09,.01,.74,0,.08,.42,.29,.8,.57,.45,0,.6,.42,.42,.12,.68,.03,0,.13,0,.24,.03,.01,.07,.03,0,.16,0,0,.43,0,.78,.42,.84,.07,.56,.81,.05,.14,0,0,.08,.74,.49,.16,.79,0,.38,.29,.42,0,0,0,.25,0,.03,.03,.52,.75,.06,0,.38,0,0,0,.04,.33,0,.2,0,.36,.91,.09,.21,0,.78,.35,.07,.95,.53,.02,0,0,.74,.01,.03,0,0,0,.02,.83,0,.01,0,.01,0,0,.37,.25,0,0,0,0,.01,.26,0,.01,.93,.48,.16,.35,.08,.94,.72,.34,0,.05,.21,.45,.92,.34,0,0,.01,0,.27,.36,.07,0,.6,.2,.03,.27,0,.06,0,.52,.39,.06,.52,0,.46,.6,0,.05,0,.12,0,.97,.7,0,.1,.03,.64,.69,0,.37,.95,.15,.36,0,.92,.02,0,.13,.54,.74,.06,0,.4,0,.38,.19,.44,.01,0,0,.21,.06,.77,0,0,0,.05,.01,.21,.01,0,.05,.39,.28,.83,.15,.7,0,.01,.26,.17,.09,.02,.94,0,.59,.98,.09,0,0,0,.14,.19,0,.33,0,.6,.67,.24,.09,.05,.02,.01,.23,0,0,.99,.39,.82,.13,.15,0,1,.39,0,.01,.01,.59,.84,.57,.04,0,.79,0,.2,.19,.83,.5,.74,.11,0,.61,0,.68,.17,.49,.29,.01,.25,.68,.01,.85,.03,.27,.01,0,.07,.89,0,.16,0,.66,.17,.94,.5,.75,0,.12,.3,.88,.61,.05,.04,0,.04,.38,0,0,.09,0,.3,.58,.21,0,.21,.95,0,.29,.36,.18,.01,.86,.11,.01,.01,0,0,.57,.46,.74,.19,0,.5,.02,0,.54,.79,0,0,0,.22,.92,0,.75,.01,.38,.01,.71,0,.02,.03,.37,0,.05,.81,.04,.26,.3,0,.11,0,0,0,0,0,.25,.25,.38,.97,.38,.98,.66,.17,.01,.47,.39,.61,.28,.31,.01,.17,.07,.79,.03,.84,.17,0,.53,.56,0,.62,0,.01,.19,.56,.54,0,.05,0,0,0,0,.24,.4,.78,0,0,.04,0,.25,1,0,.59,0,.01,.76,0,.98,.08,.39,.46,.17,.67,.17,.45,.14,0,0,0,0,.05,.68,0,.41,0,.08,.06,.38,0,.01,0,.1,.1,0,.37,.1,0,0,.05,.01,.02,.06,.15,0,0,.32,.42,0,0,.02,.28,.29,0,.44,.47,0,0,.01,.9,0,.09,.22,.04,.1,.39,.22,.15,.15,.18,.03,0,.09,.87,0,0,0,0,0,0,0,0,0,0,0,0,.11,0,0,0,.01,0,.68,.13,.52,0,0,.02,0,.02,0,0,.01,.01,.34,0,0,.83,0,.44,.69,.84,0,0,0,0,0,0,.03,.15,0,0,.15,.1,0,.32,0,.34,0,0,.12,0,0,.13,.06,.7,.29,0,.28,0,.11,.02,.05,.18,.26,.82,.17,.01,0,.86,.38,.2,.04,.44,.09,.07,.08,0,.94,.2,.21,.69,0,.08,0,0,0,.22,.49,0,.24,.09,.95,.03,.66,.07,.86,.67,.77,.08,.02,0,.53,.46,.97,0,.48,0,0,0,.55,.62,.94,0,0,.6,0,.03,.02,.44,0,0,0,.98,0,.04,.55,0,0,0,0,.33,.77,0,0,.29,0,0,.04,0,.49,.53,.73,.33,.85,.88,.69,0,.25,0,.09,0,0,.18,.93,.09,0,0,.1,.32,.51,.56,.02,.26,0,0,0,.69,.02,.23,.15,.16,.7,0,0,.02,0,0,.02,.04,0,.07,0,.43,.15,0,.79,0,.1,0,0,.02,.13,0,0,0,0,.43,.05,0,0,0,.01,.1,.67,.07,.84,.66,0,0,.05,.58,0,.11,.28,.52,.03,0,.29,.58,0,0,0,0,0,.58,.16,.1,.02,.01,0,0,.79,.1,.35,.22,.05,0,.43,0,.17,0,.68,.14,.23,.01,0,0,.49,.19,.26,.09,.13,0,0,.57,.29,.27,.21,.03,0,0,0,0,.05,.02,.33,0,.01,0,.75,.16,.84,0,.24,.19,0,.07,0,.98,0,.19,.03,0,.03,.05,0,.04,0,0,0,.32,.8,0,.08,.24,0,.4,0,.06,0,0,0,0,.59,.14,.33,.08,.32,.11,.11,0,0,0,.02,0,.12,0,0,.76,.04,.79,.26,0,.97,.38,.61,.26,.77,.03,.51,0,0,0,.2,.15,0,.06,.87,.18,.79,0,0,0,0,.02,.83,.01,.72,.23,.43,0,0,.59,.05,.94,.24,.36,.02,.15,.19,0,.78,.06,.04,0,.01,.03,.02,.44,.42,.72,.22,.1,.12,0,0,.34,.21,.22,0,0,0,.12,.4,0,.48,.83,.51,.28,.3,.97,.56,.82,.6,.02,.44,.03,0,.09,.42,.01,.03,.52,.01,.26,.86,.07,.92,.87,.65,.97,0,0,.3,.15,.09,.96,.16,0,0,0,.12,.48,.25,.91,.35,0,0,.07,0,0,.02,.98,.31,.94,0,.01,0,.03,.97,.02,.29,.68,0,0,.02,0,.9,0,0,.94,0,.12,.07,.26,.05,.03,.06,.67,0,.89,.32,.73,0,.28,0,.04,.04,0,0,0,.36,0,.6,.48,.41,.52,.7,.17,.52,.01,0,.02,0,.1,.21,.25,.05,0,.64,.03,.45,.15,.01,.97,0,0,0,.09,.19,0,0,.21,.1,.13,.04,0,0,0,.06,.02,.36,0,.07,.27,.06,0,0,0,.81,.89,0,.58,.17,.02,.25,.23,0,0,.22,.01,.42,.02,.04,0,.01,.45,.1,.31,.09,.16,.72,.03,.29,.54,0,.06,.84,.88,0,0,0,0,0,.53,.88,.02,.26,.52,.28,.11,.27,.47,.25,0,.87,0,.02,.16,.85,.17,0,.02,0,.15,.36,.52,.63,.26,.2,.39,0,.2,.01,.62,.55,0,.03,.04,.22,.01,.14,0,.42,0,.33,0,.04,.56,.76,.04,.26,.16,0,.38,.08,.1,.05,0,0,.84,0,0,.69,0,.27,.09,.24,.95,.18,0,.01,0,.27,.01,.12,.04,.24,.46,.03,0,.05,.17,0,.09,.53,.94,0,.98,0,0,.02,.03,.62,.07,.32,.09,.02,.52,.03,.3,0,.26,.27,.2,.21,.05,.68,0,0,.03,0,0,.01,.11,.81,.98,.23,.78,0,0,.03,0,.9,.24,.62,.12,0,.76,0,0,.69,.21,.04,.15,.03,0,.54,0,.35,.32,.03,0,0,.92,.09,.28,.01,.02,.05,0,.83,.85,.3,0];export{a as pvalData};
