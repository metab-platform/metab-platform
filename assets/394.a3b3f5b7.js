const a=[.36,.02,.47,.11,.51,.14,0,0,.53,0,.02,.03,.08,.83,.07,.62,.03,.91,.13,.09,.53,.16,.07,.86,.85,.29,0,.26,.44,0,.67,.2,.16,.12,.02,.78,.97,.96,0,.74,.15,.16,.29,.09,.15,.52,0,.06,.43,0,.5,.03,.79,.26,.12,.04,.12,.19,.27,.75,.82,.98,.69,.81,.88,.02,.15,.86,.48,.64,.56,.76,.08,.57,.06,.3,.18,.73,.18,.2,.95,.03,.85,.02,.02,.47,.36,.33,.31,.44,.32,.97,0,.63,.19,.61,.41,.58,.01,.92,.88,.23,.03,.7,.43,.79,.13,.16,.46,.13,.74,.05,.26,.6,.28,.03,.01,.03,.66,.92,.27,.94,.22,.92,0,.34,.01,.04,.01,.94,0,0,.63,0,.52,0,.01,.48,.01,.21,.47,.14,.28,.39,.31,.06,.8,0,.36,.24,.12,0,.24,.9,0,.21,.51,.07,.63,.28,0,.33,0,.69,0,.28,.89,.05,.86,.84,.04,.25,0,0,0,.31,.14,.01,.01,.36,.41,.44,.19,.83,.2,.18,.96,.64,0,.51,.1,0,.92,.49,.16,.92,.24,.22,.34,.22,.98,.82,.92,.88,.46,.46,0,.02,.16,.68,0,.18,.47,.3,.17,.38,.08,0,.16,.56,.83,.38,0,.41,.65,.99,0,.03,.44,.09,.71,.94,.01,.99,.01,.14,.61,.09,.18,.46,.06,.12,0,.02,0,0,.55,.17,.85,.4,.38,.76,.17,.83,.64,.22,.01,.59,.88,.38,.5,.05,.08,.59,.12,.25,.72,.07,0,.17,.02,.02,.9,.35,.37,.25,0,.16,.47,.61,0,.42,.35,.33,.98,0,.64,.94,.52,.04,0,.04,.32,0,.06,.38,0,.01,.09,0,.51,.81,.03,.2,.1,.13,.77,.48,.01,0,.4,.44,.44,.29,.04,0,.7,.44,.81,0,.05,.01,.47,.18,.02,.65,.59,.99,0,.69,.02,.93,.77,.23,.03,.4,.2,.35,0,.75,0,.73,.08,.1,.67,.86,.16,.49,.05,.15,.54,.01,.4,.77,.56,.33,.67,.39,.3,.48,.44,0,.93,.4,.35,.68,.08,1,.29,.35,.04,.97,.39,.58,.86,.69,.81,.42,.5,.74,.72,.31,.78,.06,.38,.36,.81,.35,.5,.46,.49,.25,.74,0,0,.87,.04,.22,.85,0,.01,.01,.83,.22,.01,.85,.16,.89,.16,.04,.68,.74,.07,.85,.04,.44,.23,.65,0,.1,.99,.62,.05,.01,.25,.71,.28,.49,.09,0,0,.28,.76,.66,0,.21,0,.31,.64,.62,.11,.05,.42,.92,.01,.19,.76,.14,.47,.15,.01,.31,.97,.06,.22,.97,.02,.68,.1,0,.24,.04,.41,.58,0,.12,.83,.03,1,.55,.36,.82,.93,.57,.78,.06,0,0,.83,.07,.55,.57,.07,0,.04,.37,0,.01,.33,.9,.5,.01,.26,.01,.77,.66,.17,.14,.06,.28,.73,.89,.61,.87,.02,.78,0,.23,.6,.43,.4,.09,.44,.62,.02,.25,.02,.03,.45,.09,.17,.85,.76,.52,0,.04,.01,.69,.09,.03,0,.13,.22,0,.03,.65,.71,.27,.56,.39,.17,.41,.63,.01,.27,.07,.21,0,.19,.01,.24,.92,.41,.86,.05,.79,.55,0,.68,.77,.7,.13,.56,0,.44,.18,.94,.51,.01,.04,.48,.64,.06,0,.04,.88,.24,.13,.02,.08,.22,.78,.97,.14,.2,.04,.65,0,.14,.8,.09,.28,.86,.21,0,.24,0,.94,.09,0,.21,.12,.68,.8,.03,0,.17,.04,.65,0,.34,.86,.85,.01,.47,.37,1,0,.56,.29,.05,.03,.53,.88,.5,.06,.06,.04,.22,0,.99,0,.02,.45,.69,.79,.08,.01,.02,.03,.41,.7,.12,.21,.27,.07,.64,.3,.32,.27,.03,.71,0,.88,.06,.57,.06,.6,.85,.52,.79,.56,.25,.28,.01,0,.14,.07,.47,.26,.3,.33,.88,.01,.21,.14,.52,.08,.83,.88,.22,.01,.8,.52,.31,.62,.4,.28,.58,0,.37,.73,.01,.28,.12,.04,.48,.23,.27,.6,.05,0,.01,.36,.5,.47,.06,.27,.41,.01,.77,0,.01,0,.88,.6,.2,.18,.04,.41,0,.32,.88,.02,.36,.59,.24,.17,.06,.22,.78,.21,.42,.29,.06,.01,.91,.96,.09,.25,.61,.06,.41,0,.18,.39,.64,.76,.76,.08,.09,.18,.02,.85,.22,0,.46,0,.45,.25,.01,.02,.24,.68,0,.83,.39,.48,.51,.02,.47,.23,.48,.17,.8,0,.09,0,.27,.34,.51,.66,.48,.15,.8,.59,.08,.26,.49,.16,.02,.39,.53,.5,.93,.12,1,.32,.03,.7,.01,.03,.62,.46,.8,.87,.02,.32,.44,.67,.79,.89,.55,.04,.15,.03,.07,.08,.06,.88,.01,.32,0,.8,.46,.39,.31,.85,.24,.88,.35,.99,.13,.09,.96,.1,.75,0,.2,.22,.73,.44,.01,.01,.34,.13,.25,.12,0,.29,.61,.01,.49,.34,.88,.26,.19,.54,0,.03,.82,.85,.68,.05,0,.39,.41,.05,.1,0,.6,.59,.34,.77,.15,.51,.05,0,.57,.17,.02,0,.12,.14,.67,.27,.34,.91,.97,0,.2,.36,.39,.86,.22,.25,.19,.07,.4,.67,.02,.35,.95,.53,.12,.04,.34,.01,.04,0,.28,0,.04,0,.12,.97,.1,.07,0,.01,.2,.89,.01,.08,.75,.67,.37,.95,.19,.07,0,.64,.19,.28,.2,.41,.06,.92,.01,.09,0,.55,.68,.56,.46,.25,0,.89,.52,.82,0,.76,.01,.37,0,.85,.27,.12,.16,.13,.36,.66,0,.5,.36,.88,.33,0,.11,.74,.88,0,.68,.94,.11,.09,.34,.6,0,.1,.36,0,0,0,0,0,.15,.39,.16,.18,.1,0,.03,0,.19,.15,.25,.26,.31,.76,.29,.36,.39,.87,.57,0,.09,.76,.35,.02,.19,.03,.39,.07,.76,.84,.01,.64,.01,.04,.03,.83,.45,.32,.14,.51,.08,.04,.29,.52,0,.21,.85,.55,.95,.04,.67,0,.25,.75,0,.95,.01,.46,.49,.79,.08,.96,.38,.09,.11,0,.12,0,.82,.98,.85,.89,.28,.21,.22,.14,0,.35,.19,.46,.01,.81,.88,.16,.08,1,.1,.79,.06,0,.81,.2,.59,.14,.12,.44,.99,.17,.22,.03,.95,.03,.31,.37,.57,.27,.3,.4,1,.47,0,.03,.79,.48,0,.68,.05,.95,.4,.41,0,.62,.09,.76,.47,0,.1,.19,.31,.3,.22,.44,.43,.81,.06,.31,.03,.78,.57,.51,.88,.01,.03,.27,.25,.6,.71,.01,.01,.35,.38,.09,.11,.22,.77,0,.03,.81,.16,.16,.41,.04,.26,0,.71,.06,.64,.32,.04,.65,.2,.47,.14,.21,.46,0,.03,.02,.15,.1,.25,.48,.53,.09,.08,.15,.01,.63,.21,.56,1,.18,.34,.44,.08,.29,.52,.03,.71,.01,.67,.97,.25,.84,0,0,.1,.93,.95,.34,.55,.89,.4,0,.27,.39,.69,.87,.44,.47,.03,.68,.01,0,.91,0,.49,.02,.33,.02,.62,.06,.03,.6,.51,.51,.3,.17,.14,.23,1,.05,0,.03,.02,.1,.09,.17,.76,.02,.45,.67,.12,.23,.94,.13,.29,.93,.14,.2,.06,.83,.02,.27,.73,.34,.12,.21,.41,.73,.85,.8,0,.7,.88,.51,.46,.05,.48,.11,.01,.09,.03,.08,.36,.84,.28,.01,.01,0,.09,.16,.02,.57,.74,.05,.19,0,.23,.04,.93,.04,.7,.28,.43,.04,.34,.69,.05,.26,.67,.97,.59,.66,.27,.96,.1,.13,.01,.88,.45,.05,.92,.9,.39,.78,.77,.17,.33,.42,.01,.83,.53,.15,.95,.12,.42,0,.7,.87,.65,.05,.81,.11,.53,.67,0,.51,0,.23,0,.37,.23,.31,.02,0,.03,.22,0,.21,.66,.35,.94,.46,.02,.15,.33,.54,.15,.89,.62,.16,.93,.05,.45,.35,.03,.02,.01,.01,.82,.08,.45,.17,.54,0,0,.18,.06,0,0,0,.39,0,.04,0,0,1,0,0,0,.4,.8,.14,.78,.41,.65,.39,.75,.04,.13,.69,.38,.78,0,.79,.68,.99,.08,.86,.45,.13,.27,.05,.45,.98,.29,.85,.51,.86,.45,.01,.39,.98,.89,.38,.35,0,0,.03,.03,.71,.34,.87,.19,.02,.34,.29,.22,.53,.1,.06,.09,.32,.93,.46,0,.09,.06,.08,.92,0,.55,.04,.58,0,.37,.93,.19,.52,.17,.18,.12,.06,.3,.65,.47,.15,.3,.13,.98,.25,.61,.81,.95,.2,0,.34,.5,.18,.85,.37,.92,.43,.05,.54,.62,.66,.08,.26,.2,0,.88,.2,0,.64,.01,.11,.01,.4,.72,.18,.53,.59,0,0,.39,.72,.06,0,.8,.02,.67,.68,.32,.63,.13,.01,.68,.52,.2,.17,.31,.77,.23,.4,.02,.23,.43,.17,.83,.23,.27,.01,0,.52,.05,.39,.71,.37,.48,.31,.06,.94,.35,.62,.37,.62,.74,.53,.99,.55,.92,.37,.92,.32,.61,.63,.05,.19,.96,.66,.76,.51,.13,.34,.66,.73,.2,0,.65,.06,.28,.38,.97,.45,.79,.8,.11,0,.05,.01,.42,.55,0,.18,.89,.99,.96,0,0,.09,.84,.52,.3,.01,.71,0,.55,0,.42,0,.32,.67,.13,.28,0,.57,.34,.68,.66,0,.52,0,0,.86,.77,.1,.11,0,.47,.8,.25,.56,.2,.48,.06,.96,.59,.23,.13,.54,.42,.61,.9,.42,.02,.37,.04,.15,0,.59,.15,.89,.18,.28,0,.76,.08,0,.06,.93,.93,.32,.58,.55,0,.74,0,.27,.46,.01,.79,.33,.25,.61,.65,.43,.81,.08,.92,0,.51,.24,.03,.89,.53,0,.63,.21,.42,.05,.84,.34,.05,.52,.48,0,.58,.06,.58,.13,.14,0,.45,.05,.77,.86,.98,.68,.77,.7,0,.53,.87,.83,.8,.13,.8,.29,.81,.36,.09,.15,.27,.27,.03,.15,0,.9,.57,.76,.18,.19,.27,.01,.35,.12,.02,.01,.01,0,.78,.4,.92,.54,.25,.81,.96,.05,.08,.37,0,.2,.13,.38,.46,.21,.5,.68,.5,.56,.98,.54,.6,.98,.71,.56,.08,.19,.64,.7,.16,.96,0,.7,.3,.72,.51,.72,.92,0,.23,.4,.6,.2,.73,.31,.57,0,.09,.35,.53,1,.99,.47,0,0,.06,.44,.34,.18,.93,.02,.83,.91,.09,.59,.89,.27,.08,.86,.23,.93,.03,.02,.37,.24,.49,.09,.64,.74,.4,.89,.16,.59,.78,.92,.15,.29,.34,.97,.54,.28,.38,.67,.18,.99,.38,.76,.68,.3,.22,.82,.69,.75,.05,.06,.26,.22,.45,.15,.01,0,0,.3,.64,.11,0,0,.03,.02,.42,.03,.26,.36,.54,.5,.3,.86,.28,0,.02,.53,.19,.55,.13,0,.6,.38,.19,0,.33,0,.36,.72,.92,0,.1,.04,.33,.17,.56,.42,.08,.13,.41,.08,.24,.44,.54,.01,.8,.03,.19,.02,.6,.19,.59,.61,.45,.9,.06,.02,.1,.56,.4,.78,.96,.22,0,0,.59,.04,.88,.01,.52,.01,.42,.69,.8,.54,0,.13,.01,.42,.43,.62,.01,0,.08,.28,.15,.77,.09,.13,.27,.8,.7,0,.05,.23,.18,.32,.98,.62,.44,.24,.72,.96,.52,.28,.53,.03,.01,.99,.16,.56,.01,.48,.07,.09,.72,.28,0,.12,.21,1,.92,.11,0,.19,.02,.3,.13,.05,.88,.01,.99,.15,.78,.6,.19,0,.71,.06,0,.2,.02,.15,.92,.83,0,.54,.18,.83,.91,.64,.89,.6,0,.32,.19,.64,.23,.92,.65,.64,.17,.24,.14,.35,0,.43,.85,.5,.65,.94,.16,.8,.13,.95,.01,.02,.49,.87,.06,.11,.52,.22,.02,.17,.47,0,.01,.39,.09,.78,0,.31,.04,.05,.28,.09,.95,.43,0,.01,.6,.92,.44,.74,.88,.09,0,.53,.01,.41,.49,.03,.12,0,.9,.09,.63,.29];export{a as pvalData};
